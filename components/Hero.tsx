import Image from "next/image";
import { FC } from "react";
import { working } from "@Images/index";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="flex flex-col items-center p-3 overflow-hidden lg:justify-evenly lg:flex-row-reverse lg:py-12">
      <div className="mr-[-70px] lg:mr-[-200px]">
        <Image src={working} alt="illustration-working" />
      </div>
      <div className="max-w-md py-4 text-center lg:text-left ">
        <h1 className="py-2 mx-4 text-4xl font-black tracking-tight">
          {" "}
          More than just shorter links
        </h1>
        <p className="py-4 pb-6 text-lg leading-relaxed text-gray-500">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="px-12 py-5 my-6 font-bold text-white transition-all duration-100 ease-linear delay-100 rounded-full shadow-xl bg-emerald-600 hover:bg-opacity-80 hover:text-white focus:outline-none focus:ring-1">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
