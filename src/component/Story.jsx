import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa";

export default function Story({ userName, img, isUser }) {
  return (
    <div className="relative group cursor-pointer">
      <Image
        src={img}
        alt={userName}
        width={50}
        height={50}
        className=" rounded-full p-[1.5px] border-2 border-red-600 group-hover:scale-110 "
      />
      {isUser ? (
        <FaPlus className="absolute top-4 left-4 text-white group-hover:scale-150 " />
      ) : null}
      <p className="text-xs w-14 truncate text-gray-500 group-hover:scale-125">
        {userName}
      </p>
    </div>
  );
}
