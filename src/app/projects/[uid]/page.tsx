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
        <div className="container relative p-4 mx-auto lg:flex">
            {/* Left */}
            <Contents data={page.data.slices} />
            {/* Right */}
            <div>
                <div className="relative">
                    {/* Grid */}
                    <div className="gap-6 bg-red-700 lg:grid-cols-12">
                        {/* Image */}
                        {/* <div className="lg:col-start-8 lg:col-end-13 imgContainer aspect-video">
                            <PrismicNextImage field={data.thumbnail} fill fallbackAlt="" className="rounded" />
                        </div> */}
                        {/* Text */}
                        <div className="lg:row-start-1 lg:col-end-8 lg:col-start-1">
                            <div className="mb-6">
                                <h2 className="mb-6 text-h1">{data.title}</h2>
                                <div className="[&>p]:mb-4 [&>p>a]:text-primary [&>p>a]:underline">
                                    <PrismicRichText field={data.description} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    {/* Table of Contents */}

                    {/* <div className="sticky top-[100px] left-0 h-fit w-fit">
                        <h2 className="flex items-center gap-2 mb-4 text-h3">
                            <span className="text-primary">
                                <IoIosList />
                            </span>
                            <span className="hidden">
                                Contents
                            </span>
                        </h2>
                        <ul className="list-disc list-inside marker:text-primary">
                            {page.data.slices.map((item: any, index) => {
                                let heading = ""
                                if (item.slice_type == 'screenshots') {
                                    heading = 'Screenshots'
                                } else {
                                    heading = item.primary.header
                                }
                                return <li key={index}><Link href={`#${heading.split(" ").join("-")}`} className="underline hover:text-primary">{heading}</Link></li>
                            })}
                        </ul>
                    </div> */}
                    <SliceZone slices={page.data.slices} components={components} />
                </div>
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