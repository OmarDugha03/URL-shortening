"use client";
import Image from "next/image";
import { FC, useState } from "react";
import { logo, menu } from "@Images/index";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const { status, data: session } = useSession();
  const [toggle, setToggle] = useState(false);
  const list = [{ id: "Features" }, { id: "Pricing" }, { id: "Resources" }];

  return (
    <>
      <nav className="  bg-white justify-between z-10 flex items-center border-b-[0.5px]  p-4  overflow-hidden">
        <Image src={logo} alt="logo" />
        <Image
          src={menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
          className="lg:hidden"
        />
        <div className="hidden px-4 lg:items-center lg:flex">
          {list.map((i) => (
            <Link className="hidden px-6 lg:flex " href="#" key={i.id}>
              {i.id}
            </Link>
          ))}
          <div className="w-[90%] flex flex-col items-center justify-center ">
            {status === "unauthenticated" ? (
              <Link href="/login" className="my-5">
                log in{" "}
              </Link>
            ) : (
              <div className="flex items-center px-2 mx-4">
                <button onClick={() => signOut()}>log out </button>
                <Image
                  width={28}
                  height={28}
                  className="ml-6 rounded-full"
                  src={session?.user?.image || "../public/images/logo.svg"}
                  alt="avatar"
                />
              </div>
            )}
          </div>
        </div>
      </nav>
      {toggle && (
        <div className="absolute z-10 flex flex-col lg:hidden  items-center w-[90%] py-4 mx-4 my-3 rounded-md bg-slate-100">
          {toggle &&
            list.map((item) => (
              <Link
                className="p-2 m-1 font-medium tracking-wide "
                key={item.id}
                href="#">
                {item.id}
              </Link>
            ))}

          <div className="w-[90%] flex flex-col items-center border-t ">
            {status === "unauthenticated" ? (
              <Link href="/login" className="my-5">
                log in{" "}
              </Link>
            ) : (
              <div className="flex items-center px-2 mx-4 my-4">
                <button onClick={() => signOut()}>log out </button>
                <Image
                  width={28}
                  height={28}
                  className="ml-6 rounded-full"
                  src={session?.user?.image || "../public/images/logo.svg"}
                  alt="avatar"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
