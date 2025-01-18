'use client'
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import React, { useState } from "react"
import { PrismicNextImage } from "@prismicio/next";
/**
 * Props for `Screenshots`.
 */
export type ScreenshotsProps = SliceComponentProps<Content.ScreenshotsSlice>;

/**
 * Component for "Screenshots" Slices.
 */
const Screenshots = ({ slice }: ScreenshotsProps): JSX.Element => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container p-4 mx-auto"
      id="Screenshots"
    >
      <h3 className="mb-4 text-h3 text-primary">Screenshots</h3>
      <div className="navigation-wrapper">
        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {slice.primary.screenshots.map((item, index) => (
            <div className="keen-slider__slide" key={index}>
              <div className="imgContainer aspect-video">
                <PrismicNextImage field={item.screenshot} />
              </div>
            </div>
          ))}

        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </section>
  );
};

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}


export default Screenshots;
