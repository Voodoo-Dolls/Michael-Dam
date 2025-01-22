'use client'
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import ProjectSlide from "@/components/ProjectSlide/ProjectSlide";

/**
 * Props for `FeaturedProjects`.
 */
export type FeaturedProjectsProps =
  SliceComponentProps<Content.FeaturedProjectsSlice>;

/**
 * Component for "FeaturedProjects" Slices.
 */

const FeaturedProjects = ({ slice }: FeaturedProjectsProps): JSX.Element => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      drag: true,
      loop: true,
      slides: {
        perView: 1,
        spacing: 24,
      },
      breakpoints: {
        '(min-width: 1024px': {
          slides: {
            perView: 2,
            spacing: 24
          }
        },
        '(min-width: 1280px': {
          slides: {
            perView: 4,
            spacing: 24
          }
        }
      },

    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 3000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  // console.log(slice.primary.projects[0])
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container p-4 mx-auto">
        <h2 className="mb-8 text-center text-h2">Featured Projects </h2>
        {/* Slider */}
        <div ref={sliderRef} className="keen-slider">
          {slice.primary.projects.map((item: any) => (
            <div className="keen-slider__slide" key={item.project.uid}>
              <ProjectSlide uid={item.project.uid} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
