import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

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
      className="p-4"
      id={slice.primary.header?.split(" ").join("-") || ""}
    >
      <h3 className="mb-4 text-h3 text-primary">{slice.primary.header}</h3>
      <div className="[&>p]:mb-4 [&>p>a]:text-primary [&>p>a]:underline max-w-[80rem]">
        <PrismicRichText field={slice.primary.text} />
      </div>
    </section>
  );
};

export default HeaderWithText;
