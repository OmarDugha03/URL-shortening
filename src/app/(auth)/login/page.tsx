"use client";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const page = ({}) => {
  const { status } = useSession();
  if (status === "authenticated") {
    redirect("/");
  }
  return (
    <div className="flex flex-col items-center justify-center m-12 mx-auto">
      <h1 className="py-2 mx-4 my-8 text-4xl font-black tracking-tight">
        Before this action please sign in
      </h1>

      <button
        className="w-full  lg:w-[20%] h-10 my-2 lg:h-14 font-bold text-white transition-all duration-100 ease-linear delay-100 rounded-md shadow-xl bg-emerald-600 hover:bg-opacity-80 hover:text-white focus:outline-none focus:ring-1"
        onClick={() => signIn("google")}>
        Click Here | Google
      </button>
      <button
        className="w-full  lg:w-[20%] h-10 my-2 lg:h-14 font-bold text-white transition-all duration-100 ease-linear delay-100 rounded-md shadow-xl bg-emerald-600 hover:bg-opacity-80 hover:text-white focus:outline-none focus:ring-1"
        onClick={() => signIn("github")}>
        Click Here | GitHub
      </button>
    </div>
  );
};

export default page;
