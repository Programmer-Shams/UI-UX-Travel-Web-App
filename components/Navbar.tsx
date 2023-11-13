"use client";
import { NAV_LINKS } from "@/constants/constant";
import Image from "next/image";
import Link from "next/link";
import Buttton from "./Buttton";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flexBetween max-container padding-container z-30 relative py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo " width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter pb-1.5 transition-all cursor-pointer hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Buttton
          type="button"
          title="Login"
          icon="/user.svg"
          varient="btn_dark_green"
        />
      </div>

      <div className="">
        <Image
          src="/menu.svg"
          alt="menu"
          height={32}
          width={32}
          className="inline-block cursor-pointer lg:hidden "
          onClick={() => setToggle(true)}
        />
        {toggle && (
          <div className="fixed top-0 bottom-0 right-0 w-[100%] h-[50vh] flex items-end flex-col 
          bg-white shadow-xl rounded-xl mt-5 transition ease-in-out delay-1500 duration-300">
            <Image
              src="/cancle.png"
              alt="menu"
              height={32}
              width={32}
              className="inline-block cursor-pointer lg:hidden mt-3 mr-5"
              onClick={() => setToggle(false)}
            />

            <ul className="flex flex-col items-start justify-start w-[100%] h-[100%] p-4 gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="regular-16 text-gray-50 flexCenter pb-1.5 transition-all cursor-pointer hover:font-bold"
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
