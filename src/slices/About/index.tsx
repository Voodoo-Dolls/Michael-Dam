'use client'
// import ImageZoom from "@/components/ImageZoom/ImageZoom";
import TabButton from "@/components/TabButton/TabButton";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";


/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */

const About = ({ slice }: AboutProps): JSX.Element => {
  const [tab, setTab] = useState('Top Skills')

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="about"
      className="mb-8"
    >
      <div className="container gap-8 mx-auto lg:grid lg:grid-cols-2 xl:gap-16">
        {/* Image */}
        <PrismicNextImage field={slice.primary.image} width={800} height={0} className="w-full h-auto" />
        {/* Masonry */}
        {/* <div className="gap-1 select-none columns-2 md:columns-3" >

          {slice.primary.masonry.map((item) => (
            <ImageZoom>
              <PrismicNextImage field={item.image} fallbackAlt="" sizes="100%" style={{ width: "100%", height: "auto" }} className="object-contain" />
            </ImageZoom>
          ))}



        </div> */}






        {/* Text */}
        <div className="relative p-6 bg-opacity-50 rounded bg-black2 backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-full h-full bg-cover pattern -z-1"></div>
          <h2 className="flex items-center gap-2 mb-4 text-white text-h2">
            <span className="text-primary">
              <CgProfile />
            </span>
            About Me
          </h2>
          {/* Body Text */}
          <div className="[&>p]:mb-4 relative z-1">
            <PrismicRichText field={slice.primary.text} />
          </div>
          {/* Tabs */}
          <div className="relative flex flex-wrap z-1 gap-x-8 gap-y-4">
            {slice.primary.tabs.map((item, index) => (
              <TabButton title={item.title} tab={tab} setTab={setTab} key={index}>
                <div className="[&>ul]:list-disc [&>ul]:list-inside marker:text-primary">

                  <PrismicRichText field={item.list} />
                </div>
              </TabButton>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
