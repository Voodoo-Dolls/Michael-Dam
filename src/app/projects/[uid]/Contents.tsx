'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { IoIosList } from "react-icons/io";
// import { useInView } from "react-intersection-observer";



export default function Contents({ data }: any) {
    const [open, setOpen] = useState(false)
    // const [ref, inView, entry] = useInView();
    // console.log(entry)
    return (
        <>
            <div className="fixed bottom-0 left-0 z-10 mb-4 ml-4 lg:static">
                <div className={`grid ${open ? "block" : "hidden"} `}>
                    <ul className="p-4 list-disc list-inside bg-red-900 marker:text-primary">
                        {data.map((item: any, index: number) => {
                            let heading = ""
                            if (item.slice_type == 'screenshots') {
                                heading = 'Screenshots'
                            } else {
                                heading = item.primary.header
                            }

                            return <li key={index}><Link href={`#${heading.split(" ").join("-")}`} className="underline hover:text-primary" onClick={() => (setOpen(false))}>{heading}</Link></li>
                        })}
                    </ul>
                </div>
                <h2 className="flex items-center gap-2 bg-black border cursor-pointer text-h4 w-fit" onClick={() => (setOpen(!open))}>
                    <span className="text-primary">
                        <IoIosList />
                    </span>
                    {/* Contents */}
                </h2>
            </div>
        </>
    )
}
