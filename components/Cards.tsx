import Image from "next/image";
import { ReactNode } from "react";
import { FC } from "react";

interface CardsProps {
  src: string;
  heading: string;
  desc: string;
  className?: ReactNode;
}

const Cards: FC<CardsProps> = ({ src, heading, desc, className }) => {
  return (
    <div className={className + ""}>
      <div
        className={
          " text-center lg:text-left py-4 lg:py-2 px-1 rounded lg:my-1 my-12  flex flex-col  items-center bg-white m-5 max-w-md "
        }>
        <div className="mt-[-50px]">
          <div className="p-4 rounded-full bg-slate-800 w-fit ">
            <Image src={src} alt="icons" className="w-8" />
          </div>
        </div>
        <h2 className="py-2 mx-4 text-xl font-black tracking-tight">
          {heading}
        </h2>
        <p className="py-4 pb-6 mx-4 text-lg leading-relaxed text-gray-500">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Cards;
