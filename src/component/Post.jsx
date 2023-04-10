import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {
  HiOutlineHeart,
  HiOutlineChat,
  HiOutlineEmojiHappy,
  HiHeart,
} from "react-icons/hi";
import { GiBookmark } from "react-icons/gi";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import Moment from "react-moment";
import { async } from "@firebase/util";

export default function Post({ id, img, username, caption, userImg }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [db, id]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", id, "likes"),
      (snapshot) => {
        setLikes(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [db]);

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user.uid) !== -1
    );
  }, [likes]);

  async function likePost() {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  }

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
            {hasLiked ? (
              <HiHeart
                onClick={likePost}
                className=" text-red-400  hover:scale-125 cursor-pointer transition-transform duration-200 ease-out"
              />
            ) : (
              <HiOutlineHeart
                onClick={likePost}
                className="hover:scale-125 cursor-pointer transition-transform duration-200 ease-out"
              />
            )}
            <div>{likes.length}</div>
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

      {comments.length > 0 && (
        <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2">
              <img
                src={comment.data().userImage}
                alt="user-image"
                className="h-9 rounded-full object-cover"
              />
              <p className="font-bold text-gray-500">
                {comment.data().username}
              </p>
              <p className="flex-1 truncate pl-3">{comment.data().comment}</p>
              <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}

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
