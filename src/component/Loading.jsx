import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center">
      <Image src="spinner.svg" alt="Loading..." width={50} height={50} />
    </div>
  );
}
