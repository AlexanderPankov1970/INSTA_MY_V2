import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { AiFillHome, AiFillPlusCircle } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "src/atom/ModalAtom";

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);

  console.log(99999, session);
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

          {session ? (
            <>
              <AiFillPlusCircle
                onClick={() => setOpen(true)}
                className="text-2xl cursor-pointer hover:scale-125"
              />
              <Image
                onClick={signOut}
                src={session.user.image}
                alt={"User Photo"}
                className="h-12 rounded-full cursor-pointer object-cover"
                width={50}
                height={50}
              />
            </>
          ) : (
            <button onClick={signIn}>Sign in</button>
          )}
        </div>
      </div>
    </div>
  );
}
