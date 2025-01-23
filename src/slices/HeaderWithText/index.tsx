import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { IoTelescopeSharp } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { FaPaintbrush } from "react-icons/fa6";
import { TbBubbleFilled } from "react-icons/tb";
import { IoSparkles } from "react-icons/io5";



const icons = {
  "Scope": <IoTelescopeSharp />,
  "Cap": <FaGraduationCap />,
  "Brush": <FaPaintbrush />,
  "Bubble": <TbBubbleFilled />,
  "Sparkle": <IoSparkles />,
}

/**
 * Props for `HeaderWithText`.
 */
export type HeaderWithTextProps =
  SliceComponentProps<Content.HeaderWithTextSlice>;

/**
 * Component for "HeaderWithText" Slices.
 */
const HeaderWithText = ({ slice }: HeaderWithTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={slice.primary.header?.split(" ").join("-") || ""}
    >
      <h3 className="flex items-center gap-2 mb-4 text-h3">
        {slice.primary.icon != "Empty" && <span className="text-primary">{icons[slice.primary.icon]}</span>}
        {slice.primary.header}
      </h3>
      <div className="[&>p]:mb-4 [&>p>a]:text-primary [&>p>a]:underline max-w-[80rem]">
        <PrismicRichText field={slice.primary.text} />
      </div>
    </section>
  );
};

export default HeaderWithText;
