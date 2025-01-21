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
            <div className="fixed bottom-4 left-4 z-10 rounded lg:sticky lg:top-[112px] min-w-fit h-fit bg-black2 border border-primary">

                <div className='flex items-center justify-start gap-2 p-4 text-h4' onClick={() => (setOpen(!open))}>
                    <IoIosList />
                    <h2 className='hidden lg:block'>
                        Contents
                    </h2>

                </div>

                <div className={` grid transition-all  ${open ? "grid-rows-1 pb-4 " : "grid-rows-0"} lg:grid-rows-1 ml-4 lg:mt-2 `}>
                    <ul className={`list-disc list-inside marker:text-primary w-fit overflow-hidden`}>
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
