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
            <div className="fixed bottom-4 left-4 z-10 rounded lg:sticky lg:top-[128px]  h-fit bg-black2 border-primary border">

                <div className='flex items-center justify-start gap-2 p-4 text-h4' onClick={() => (setOpen(!open))}>
                    <IoIosList />
                    <h2 className='hidden lg:block'>
                        Contents
                    </h2>
                </div>

                <div className={`grid w-0 ${open ? "grid-rows-1 w-max pb-4" : "grid-rows-0"} lg:grid-rows-1  px-4 lg:pb-4`}>
                    <ul className={`list-disc list-inside marker:text-primary w-fit overflow-hidden ml-4`}>
                        {data.map((item: any, index: number) => {
                            let heading = ""
                            if (item.slice_type == 'screenshots') {
                                heading = 'Screenshots'
                            } else {
                                heading = item.primary.header
                            }
                            return <li key={index} className='whitespace-nowrap'><Link href={`#${heading.split(" ").join("-")}`} className="underline hover:text-primary w-fit" onClick={() => (setOpen(false))}>{heading}</Link></li>
                        })}
                    </ul>
                </div>

            </div>
        </>
    )
}
