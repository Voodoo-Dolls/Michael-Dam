import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import { li } from "motion/react-client";
import Link from "next/link";

type Params = { uid: string };



export default async function Page({ params }: { params: Promise<Params> }) {
    const { uid } = await params;
    const client = createClient();
    const page = await client.getByUID("project", uid).catch(() => notFound());
    // console.log(page)
    const { data } = page
    console.log(data)
    return (
        <>
            <div className="container p-4 mx-auto">
                {/* Grid */}
                <div className="grid gap-6 lg:grid-cols-12">
                    {/* Image */}
                    <div className="lg:col-start-9 lg:col-end-13 imgContainer aspect-video">
                        <PrismicNextImage field={data.thumbnail} fill fallbackAlt="" />
                    </div>
                    {/* Text */}
                    <div className="lg:row-start-1 lg:col-end-8 lg:col-start-1">
                        <div className="mb-6">
                            <h2 className="mb-6">{data.title}</h2>
                            <PrismicRichText field={data.description} />
                        </div>
                        {/* Table of Contents */}
                        <h2>Table of Contents</h2>
                        <ul>
                            {page.data.slices.map((item: any, index) => {
                                let heading = ""
                                if (item.slice_type == 'screenshots') {
                                    heading = 'Screenshots'
                                } else {
                                    heading = item.primary.header
                                }

                                return <li key={index}><Link href={`#${heading.split(" ").join("-")}`}>{heading}</Link></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            <SliceZone slices={page.data.slices} components={components} />
        </>
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