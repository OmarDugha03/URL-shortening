import Image from "next/image";
import { FC } from "react";
import { boostDes, boostMob } from "@Images/index";
import Link from "next/link";
interface CTAProps {}

const CTA: FC<CTAProps> = ({}) => {
  return (
    <div className="pb-[180px] lg:pb-20">
      <div className="relative flex flex-col items-center justify-center w-full pt-3 text-center text-white">
        <div className="absolute top-0 w-full bg-slate-800 -z-20">
          <Image src={boostDes} alt="svg" className="hidden lg:block" />
          <Image
            src={boostMob}
            alt="svg"
            className="ml-14 md:ml-[600px] lg:hidden"
          />
        </div>
        <div className="">
          <h2 className="py-1 pb-4 mx-4 my-8 text-2xl font-black tracking-tight">
            Boost your links today
          </h2>
          <Link
            href="#getStart"
            className="p-4 font-bold text-white transition-all duration-100 ease-linear delay-100 rounded-full shadow-xl bg-emerald-600 hover:bg-opacity-80 hover:text-white focus:outline-none focus:ring-1">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
