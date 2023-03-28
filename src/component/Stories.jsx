import React, { useState, useEffect } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
import Story from "./Story";

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);
  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => ({
      userName: minifaker.username({ locale: "en" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStoryUsers(storyUsers);
    //console.log(storyUsers);
  }, []);
  return (
    <div className="flex space-x-2 bg-white p-6 mt-6 border-1 border-gray-300 overflow-x-scroll scrollbar-none ">
      {storyUsers.map((user) => (
        <Story key={user.id} userName={user.userName} img={user.img} />
      ))}
    </div>
  );
}
