import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import { IoIosList } from "react-icons/io";

import Link from "next/link";
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
        <div className="container relative p-4 mx-auto lg:flex lg:gap-6">
            {/* Left */}
            <Contents data={page.data.slices} />
            {/* Right */}
            <div className="relative flex-grow w-full overflow-hidden">
                {/* Grid */}
                <div className="w-full gap-6 xl:grid xl:grid-cols-12">
                    {/* Image */}
                    <div className="mb-4 xl:col-start-8 xl:col-end-13 imgContainer aspect-video">
                        <PrismicNextImage field={data.thumbnail} fill fallbackAlt="" className="rounded" />
                    </div>
                    {/* Text */}
                    <div className="xl:row-start-1 xl:col-end-8 xl:col-start-1">
                        <div className="mb-6">
                            <h2 className="mb-6 text-h1">{data.title}</h2>
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