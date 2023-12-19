import { FC } from "react";
import Cards from "./Cards";
import { customizable, brandIcon, detailed } from "@Images/index";
interface AdvancedProps {}

const Advanced: FC<AdvancedProps> = ({}) => {
  return (
    <div className="pt-20 bg-slate-200">
      <div className="flex flex-col items-center mx-4">
        <h2 className="py-2 text-3xl font-black tracking-tight">
          Advanced Statistics
        </h2>
        <p className="py-4 pb-6 text-lg leading-relaxed text-gray-500">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="relative flex flex-col items-center py-8 lg:grid lg:grid-cols-3 lg:grid-rows-3">
        <Cards
          src={brandIcon}
          heading={"Brand Recognition"}
          desc={
            "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          }
        />
        <div className="absolute w-2 h-2 lg:w-[40px] lg:left-[430px] 2xl:hidden md:block  lg:h-2 xs:top-[728px] lg:top-52 ls:hidden lg:block s:h-[63px] s:top-[326px] md:top-[296px]  bg-emerald-500" />

        <Cards
          className="lg:row-span-2"
          src={detailed}
          heading={"Detailed Records"}
          desc={
            "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          }
        />

        <Cards
          className="lg:row-span-3"
          src={customizable}
          heading={"Fully Customizable"}
          desc={
            "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          }
        />
        <div className="absolute w-2 h-[64px] xs:top-[728px] lg:w-[40px] md:block lg:left-[880px] lg:h-2 2xl:hidden lg:top-80 lg:block s:h-[63px] s:top-[668px] ls:hidden md:top-[612px]   bg-emerald-500" />
      </div>
    </div>
  );
};

export default Advanced;
