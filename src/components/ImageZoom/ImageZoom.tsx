'use client'

import Image from "next/image"
import { useState } from "react"
import styles from "./ImageZoom.module.css"

interface props {
    children: JSX.Element
}



const ImageZoom = ({ children }: props) => {
    const [zoom, setZoom] = useState(false)
    return (
        <div className={`${zoom ? `${styles.active} no-scroll` : styles.default}`} onWheel={() => { setZoom(false) }} onClick={() => { setZoom(!zoom) }}>
            <div className={`${zoom && 'flex item-center container mx-auto max-h-screen p-8 w-[1000px]'}`}>
                {children}
            </div>
        </div>
    )
}

export default ImageZoom