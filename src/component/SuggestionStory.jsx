import Image from "next/image";
import React from "react";

export default function SuggestionStory({ img, userName, jobTitle }) {
  return (
    <div className="flex items-center justify-between mt-6">
      <div className="flex items-center space-x-2">
        <Image
          src={img}
          alt={userName}
          width={50}
          height={50}
          className="cursor-pointer rounded-full p-[1.5px] border-2 border-red-600 hover:scale-110"
        />
        <div className="">
          <p className="text-xs w-24 truncate text-gray-500 font-bold">
            {userName}
          </p>
          <p className="text-xs w-24 truncate text-gray-400">{jobTitle}</p>
        </div>
      </div>
      <button className="text-blue-400 font-semibold">Follow</button>
    </div>
  );
}
