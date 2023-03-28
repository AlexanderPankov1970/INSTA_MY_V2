import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { AiFillHome, AiFillPlusCircle } from "react-icons/ai";

export default function Header() {
  return (
    <div className="shadow-md border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-7xl">
        <div className=" relative hidden sm:inline cursor-pointer m-3">
          <Image
            src={
              "https://www.nftgators.com/wp-content/uploads/2022/03/Instagram-.jpg"
            }
            alt={"Logo Instagram"}
            // layout="full"
            // className="object-contain "
            width={160}
            height={160}
          />
        </div>
        <div className="relative sm:hidden cursor-pointer m-4">
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
            }
            alt={"Image Instagram"}
            width={50}
            height={50}
          />
        </div>
        <div className="relative ">
          <div className="absolute">
            <FaSearch className="h-5 text-gray-500 mt-2 ml-3" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 bg-gray-50 border-gray-500 text-sm  focus:ring-black focus:border-black rounded-lg"
          />
        </div>
        <div className="flex space-x-4 items-center mx-4">
          <AiFillHome className="hidden md:inline text-2xl cursor-pointer hover:scale-125" />
          <AiFillPlusCircle className="text-2xl cursor-pointer hover:scale-125" />
          <Image
            src={"/pankov3.jpg"}
            alt={"User Photo"}
            className="h-12 rounded-full"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}
