import Image from "next/image";
import React, { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {
  HiOutlineHeart,
  HiOutlineChat,
  HiOutlineEmojiHappy,
} from "react-icons/hi";
import { GiBookmark } from "react-icons/gi";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

export default function Post({ id, img, username, caption, userImg }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");

  async function sendComment(event) {
    event.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  }
  return (
    <div className="bg-white mt-4 border-2 rounder-md">
      {/* Post Header*/}
      <div className="flex items-center p-5 space-x-4">
        <Image
          src={userImg}
          alt={username}
          width={50}
          height={50}
          className="h-12 rounded-full cursor-pointer object-cover"
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
      {session && (
        <div className="flex justify-between px-2 m-4">
          <div className="flex justify-between px-4 space-x-6">
            <HiOutlineHeart className="hover:scale-125 cursor-pointer transition-transform duration-200 ease-out" />
            <HiOutlineChat className="hover:scale-125 cursor-pointer transition-transform duration-200 ease-out" />
          </div>
          <GiBookmark className="hover:scale-125 cursor-pointer transition-transform duration-200 ease-out" />
        </div>
      )}

      {/* Post Comments */}
      <p className="p-5 truncate">
        <span className="mr-3 font-bold ">{username}</span>
        {caption}
      </p>
      {/* Post Input Box */}
      {session && (
        <form className="flex items-center justify-between p-4">
          <HiOutlineEmojiHappy className="text-xl" />
          <input
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            type="text"
            placeholder="Enter your comments..."
            className="flex-1 border-none focus:ring-0"
          />
          <button
            type="submit"
            onClick={sendComment}
            disabled={!comment.trim()}
            className="text-blue-400 font-bold disabled:text-blue-200"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}
