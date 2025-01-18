'use client'
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import styles from "./ProjectSlide.module.css"
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
            <div className={`${styles.aspect} w-full flex items-center justify-center`}>
                <Spinner />
            </div>
        )
    }
    const { data } = project

    return (
        <>
            {/* Card */}
            <Link href={project.url} className="">
                {/* Image */}
                <div className={`imgContainer aspect-video mb-2`}>
                    <PrismicNextImage field={data.thumbnail} fallbackAlt="" fill className="my-0" />
                </div>
                {/* Title */}
                <h3 className="text-h4 line-clamp-1">{data.title}</h3>
                {/* Tags */}
            </Link>

        </>
    )
}