import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
        console.log(222222, posts);
      }
    );
    return unsubscribe;
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

//DUMMY data:
// const posts = [
//   {
//     id: "1",
//     username: "alex_pankov",
//     userImg: "/pankov3.jpg",
//     caption: "Amazing super car",
//     //img: "/bridge.jpg",
//     img: "https://images.pexels.com/photos/7387470/pexels-photo-7387470.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: "2",
//     username: "alex_pankov",
//     userImg: "/pankov3.jpg",
//     caption: "Cool car",
//     //img: "/BMW.jpg",
//     img: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: "3",
//     username: "alex_pankov",
//     userImg: "/pankov3.jpg",
//     caption: "New photo",
//     //img: "/Chevrolet.jpg",
//     img: "https://images.unsplash.com/photo-1676745737239-8c60b47cb794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
//   },
// ];

/////
//  return (
//    <div>
//      {posts.map((post) => (
//        <Post
//          key={post.id}
//          id={post.id}
//          username={post.username}
//          userImg={post.userImg}
//          img={post.img}
//          caption={post.caption}
//        />
//      ))}
//    </div>
//  );
//Just links:
//https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600
//https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600
