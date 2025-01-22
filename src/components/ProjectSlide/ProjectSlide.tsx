'use client'
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
interface props {
    uid: string
}

interface project {
    url: string
    data: {
        title: string
        thumbnail: {

        }
    }
    tags: [string]
}
export default function ProjectSlide({ uid }: props) {
    const [project, setProject] = useState<project | null>(null)
    useEffect(() => {
        const fetchData = async () => {
            const client = createClient();
            const data: any = await client.getByUID("project", uid)
            setProject(data)
        }
        fetchData()
    }, [uid])
    if (!project) {
        return (
            <div className={`aspect-video w-full flex items-center justify-center`}>
                <Spinner />
            </div>
        )
    }
    const { data } = project
    // console.log(project)
    return (
        <>
            {/* Card */}
            <Link href={project.url} className="group">
                {/* Image */}
                <div className={`imgContainer aspect-video mb-2 rounded border-transparent`}>
                    {/* Overlay */}
                    <div className="absolute z-10 w-full h-full transition-all bg-opacity-50 opacity-0 bg-primary group-hover:opacity-50"></div>
                    <PrismicNextImage field={data.thumbnail} fallbackAlt="" fill className="my-0" />
                </div>
                {/* Title */}
                <h3 className="text-h4 group-hover:underline line-clamp-1">{data.title}</h3>
                {/* Tags */}
                <div>
                    <p className="text-xs text-[#ADB7BE] line-clamp-1">{project.tags.join(", ")}</p>
                </div>
            </Link>

        </>
    )
}