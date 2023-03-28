import Image from "next/image";
import React from "react";

export default function Story({ userName, img }) {
  return (
    <div className="">
      <Image
        src={img}
        alt={userName}
        width={50}
        height={50}
        className="cursor-pointer rounded-full p-[1.5px] border-2 border-red-600 hover:scale-110"
      />
      <p className="text-xs w-14 truncate text-gray-500">{userName}</p>
    </div>
  );
}
