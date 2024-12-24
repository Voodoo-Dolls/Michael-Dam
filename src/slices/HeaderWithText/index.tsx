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
      className="container p-4 mx-auto"
      id={slice.primary.header?.split(" ").join("-") || ""}
    >
      <h3>{slice.primary.header}</h3>
      <PrismicRichText field={slice.primary.text} />
    </section>
  );
};

export default HeaderWithText;
