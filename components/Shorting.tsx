import Image from "next/image";
import { shrotDes, shrotMob } from "@Images/index";
import Linkinputs from "./Linkinputs";
import DeleteLink from "./DeleteLink";
import Link from "next/link";

type Link = {
  _id: string;
  link: string;
};

const getLinks = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/link", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};
const Shorting = async ({}) => {
  const { links } = await getLinks();
  return (
    <>
      <div className="relative h-full p-4 mx-4 rounded lg:p-8 bg-slate-700">
        <Image
          src={shrotDes}
          className="hidden lg:right-1 -z-10 lg:absolute"
          alt="svg"
        />
        <Image
          src={shrotMob}
          className="absolute top-0 right-0 lg:hidden -z-10"
          alt="svg"
        />
        <Linkinputs />
      </div>
      <div className="w-full pb-12 my-1 mb-12">
        {links.map((i: Link) => (
          <div
            className="container z-20 flex items-center justify-between p-6 mx-auto mt-4 rounded-md bg-slate-200"
            key={i._id}>
            <Link
              href={`${i.link}`}
              target="_blank"
              className="text-blue-600 visited:text-purple-700">
              {i.link.slice(8, -5)}
            </Link>
            <DeleteLink id={i._id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Shorting;
