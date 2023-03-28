import Image from "next/image";
import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {
  HiOutlineHeart,
  HiOutlineChat,
  HiOutlineEmojiHappy,
} from "react-icons/hi";
import { GiBookmark } from "react-icons/gi";

export default function Post({ id, img, username, caption, userImg }) {
  return (
    <div className="bg-white mt-4 border-2 rounder-md">
      {/* Post Header*/}
      <div className="flex items-center p-5">
        <Image
          src={userImg}
          alt={username}
          width={50}
          height={50}
          className="rounded-full object-cover border p-1 mr-3"
        />
        <p className="font-bold flex-auto">{username}</p>
        <BiDotsHorizontalRounded className="" />
      </div>
      {/* Post Image */}
      <Image
        src={img}
        alt={"Photo"}
        width={450}
        height={450}
        className="object-cover w-full pl-4"
      />
      {/* Post Buttons */}
      <div className="flex justify-between px-2 m-4">
        <div className="flex justify-between px-4 space-x-6">
          <HiOutlineHeart className="hover:scale-125 cursor-pointer transition-transform duration-200 ease-out" />
          <HiOutlineChat className="btn" />
        </div>
        <GiBookmark className="btn" />
      </div>
      {/* Post Comments */}
      <p className="p-5 truncate">
        <span className="mr-3 font-bold ">{username}</span>
        {caption}
      </p>
      {/* Post Input Box */}
      <form className="flex items-center justify-between p-4">
        <HiOutlineEmojiHappy className="text-xl" />
        <input
          type="text"
          placeholder="Enter your comments..."
          className="flex-1 border-none focus:ring-0"
        />
        <button className="text-blue-400 font-bold">Post</button>
      </form>
    </div>
  );
}
