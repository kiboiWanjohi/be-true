import React, { useState, useEffect } from "react";
import "./Home.css";
import Post from "./Post";
import { db } from "./Firebase";
const Home = () => {
  const [posts, setPosts] = useState([]);
  // const trialPosts =   {
  //       username: "wemafisana",
  //       caption: "Trying Out Astro JS",
  //       imageURL:
  //         "https://robohash.org/2600:6c5e:357f:e274:dd4:78bb:b35f:924d.png/",
  //     },
  //     {
  //       username: "yakuza",
  //       caption: "Destroyer of the earth",
  //       imageURL:
  //         "https://robohash.org/2600:6c5e:357f:e274:dd4:78bb:b35f:924d.png/",
  //     },
  //     {
  //       username: "cleeverland",
  //       caption: "Instagram Sucks",
  //       imageURL:
  //         "https://robohash.org/2600:6c5e:357f:e274:dd4:78bb:b35f:924d.png/",
  //     },

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="home">
      <div className="home-header">
        <p>Be Organic</p>
      </div>
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageURL={post.imageURL}
        />
      ))}
    </div>
  );
};

export default Home;
