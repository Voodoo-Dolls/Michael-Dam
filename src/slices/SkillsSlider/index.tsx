'use client'
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { PrismicNextImage } from "@prismicio/next";
/**
 * Props for `SkillsSlider`.
 */


/**
 * Component for "SkillsSlider" Slices.
 */
const SkillsSlider = ({ slice }: any): JSX.Element => {
  const animation = { duration: 7000, easing: (t: number) => t }
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 2,
        spacing: 24
      },
      breakpoints: {
        "(min-width: 500px)": {
          slides: {
            perView: 3,
            spacing: 24
          },
        },
        "(min-width: 768px)": {
          slides: {
            perView: 4,
            spacing: 24
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 6,
            spacing: 48
          },
        },
      },
      created(s) {
        s.moveToIdx(slice.primary.direction, true, animation)
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + slice.primary.direction, true, animation)
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + slice.primary.direction, true, animation)
      }
    },

    [
      // add plugins here
    ]
  )
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container p-4 mx-auto"
    >
      {/* Slider */}
      <div ref={sliderRef} className="text-black keen-slider">
        {slice.primary.skills.map((item: any, index: number) => (
          <div className="p-8 keen-slider__slide" style={{ backgroundColor: `${item.background_color}` }} key={index}>
            <div className="imgContainer aspect-square [&>img]:object-contain">
              <PrismicNextImage field={item.icon} fill fallbackAlt="" />
              <p>{item.skill_name}</p>
            </div>
          </div>

        ))}
      </div>

    </section>
  );
};

export default SkillsSlider;
