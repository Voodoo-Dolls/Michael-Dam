'use client'
import TabButton from "@/components/TabButton/TabButton";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useState } from "react";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */

const About = ({ slice }: AboutProps): JSX.Element => {
  const [tab, setTab] = useState('Top Skills')

  console.log(slice.primary.tabs[0])
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container gap-8 px-4 py-8 mx-auto md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">

        {/* Image */}
        <div className="relative object-contain mb-4 aspect-video">
          <PrismicNextImage field={slice.primary.image} fallbackAlt="" fill className="object-contain" />
        </div>
        {/* Text */}
        <div className="">
          <h2 className="text-h2">About Me</h2>
          <PrismicRichText field={slice.primary.text} />
          {/* Tabs */}
          <div className="flex flex-wrap gap-4">

            {slice.primary.tabs.map((item, index) => (
              <TabButton title={item.title} tab={tab} setTab={setTab} key={index}>
                <PrismicRichText field={item.list} />
              </TabButton>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
