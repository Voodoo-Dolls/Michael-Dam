import Achievements from "@/components/Achievements/Achievements";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Statisitics`.
 */
export type StatisiticsProps = SliceComponentProps<Content.StatisiticsSlice>;

/**
 * Component for "Statisitics" Slices.
 */
const Statisitics = ({ slice }: StatisiticsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Achievements />
    </section>
  );
};

export default Statisitics;
