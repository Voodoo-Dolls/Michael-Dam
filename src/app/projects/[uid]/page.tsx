import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import { FaC, FaCloud } from "react-icons/fa6";

import Contents from "./Contents";

type Params = { uid: string };



export default async function Page({ params }: { params: Promise<Params> }) {
    const { uid } = await params;
    const client = createClient();
    const page = await client.getByUID("project", uid).catch(() => notFound());
    // console.log(page)
    const { data } = page
    // console.log(data)
    return (
        <div className="container relative mx-auto lg:flex lg:gap-6" id="top">
            {/* Left */}
            <Contents data={page.data.slices} />
            {/* Right */}
            <div className="relative grid flex-grow w-full grid-cols-1 gap-4 p-6 overflow-hidden bg-opacity-50 rounded bg-black2 backdrop-blur-sm">
                {/* Grid */}
                <div className="w-full gap-6 mb-4 xl:grid xl:grid-cols-12 ">
                    {/* Image */}
                    <div className="mb-4 xl:col-start-8 xl:col-end-13 imgContainer aspect-video">
                        <PrismicNextImage field={data.thumbnail} fill fallbackAlt="" className="rounded" />
                    </div>
                    {/* Text */}
                    <div className="xl:row-start-1 xl:col-end-8 xl:col-start-1">
                        <div className="mb-6">
                            <h2 className="flex items-center gap-2 mb-6 text-h2">
                                <span className="text-primary">
                                    <FaCloud />
                                </span>
                                {data.title}
                            </h2>
                            <div className="[&>p]:mb-4 [&>p>a]:text-primary [&>p>a]:underline">
                                <PrismicRichText field={data.description} />
                            </div>
                        </div>
                    </div>
                </div>
                <SliceZone slices={page.data.slices} components={components} />
            </div>
        </div>
    )
}

export async function generateMetadata({
    params,
}: {
    params: Promise<Params>;
}): Promise<Metadata> {
    const { uid } = await params;
    const client = createClient();
    const page = await client.getByUID("project", uid).catch(() => notFound());

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}

export async function generateStaticParams() {
    const client = createClient();
    const pages = await client.getAllByType("project");

    return pages.map((page) => {
        return { uid: page.uid };
    });
}