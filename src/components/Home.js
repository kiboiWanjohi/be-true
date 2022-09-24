import React from "react";
import "./Home.css";
import Post from "./Post";
const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <p>Be Organic</p>
      </div>
      <Post />
    </div>
  );
};

export default Home;
