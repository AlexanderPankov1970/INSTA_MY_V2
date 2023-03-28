import Image from "next/image";
import React from "react";

export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-12">
      <Image
        src={"/pankov3.jpg"}
        alt={"User Photo"}
        className="h-12 rounded-full m-4 border p-[2px]"
        width={50}
        height={50}
      />
      <div className="flex-1">
        <h2 className="font-bold">alex_pankov</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="font-semibold text-blue-400">Sign out</button>
    </div>
  );
}
