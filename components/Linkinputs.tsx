"use client";
import { useState } from "react";
import Input from "./Input";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

const Linkinputs = ({}) => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const urlRegex =
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
  const isValidURL = urlRegex.test(value);
  const { status, data: session } = useSession();
  if (status == "unauthenticated") {
    redirect("/login");
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!value || value.length < 12 || !isValidURL) {
      alert("pls enter a valid value");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/link", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          link: value,
          userId: session?.user.id,
        }),
      });

      if (res.ok) {
        router.refresh();
        setValue("");
      } else {
        throw new Error("Failed to create a link");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="lg:flex group">
        <Input
          pattern="https?://.+"
          required
          minLength={12}
          placeholder="shorten a link here"
          className="lg:mx-2 my-2  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 bg-white placeholder:font-medium  lg:h-14 lg:w-[90%]"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
          Please enter a valid email address
        </span>
        <button
          type="submit"
          className="w-full group-invalid:pointer-events-none group-invalid:opacity-30  lg:w-[20%] h-10 my-2 lg:h-14 font-bold text-white transition-all duration-100 ease-linear delay-100 rounded-md shadow-xl bg-emerald-600 hover:bg-opacity-80 hover:text-white focus:outline-none focus:ring-1">
          Shorten It!
        </button>
      </form>
    </>
  );
};
export default Linkinputs;
