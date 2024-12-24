'use client'
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { PrismicNextImage } from "@prismicio/next";
import styles from "./Skills.module.css"
/**
 * Props for `SkillsSlider`.
 */


/**
 * Component for "SkillsSlider" Slices.
 */
const animation = { duration: 40000, easing: (t: number) => t }
const SkillsSlider = ({ slice }: any): JSX.Element => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 2,

      },
      breakpoints: {
        "(min-width: 500px)": {
          slides: {
            perView: 3,

          },
        },
        "(min-width: 768px)": {
          slides: {
            perView: 4,

          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 6,
          },
        },
      },
      rtl: slice.primary.direction,

      created(s) {
        s.moveToIdx(5, true, animation)
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
    },

    [
      // add plugins here
    ]
  )
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`container p-4 mx-auto`}
    >
      {/* Slider */}
      {/* {slice.primary.direction && <h2>Skills</h2>} */}
      <div ref={sliderRef} className="text-black keen-slider">
        {slice.primary.skills.map((item: any, index: number) => (
          <div className="p-8 keen-slider__slide" key={index}>
            <div className={`imgContainer [&>img]:object-contain ${styles.aspect}`}>
              <PrismicNextImage field={item.icon} fill fallbackAlt="" sizes="(max-width: 500px) 110px, (max-width:768) 120px, 190px" />
            </div>
          </div>

        ))}
      </div>

    </section>
  );
};

export default SkillsSlider;
