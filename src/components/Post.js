import React from "react";
import "./Post.css";

// Add Material UI
import Avatar from "@mui/material/Avatar";
const Post = ({ username, caption, imageURL }) => {
  return (
    <div className="post">
      <div className="post-header">
        {/* header */}

        <Avatar
          className="post-avatar"
          alt={username}
          src="https://robohash.org/2600:6c5e:357f:e274:dd4:78bb:b35f:924d.png"
        ></Avatar>
        <h3>{username}</h3>
      </div>
      {/* image */}
      <img className="post-img" src={imageURL} alt="" />
      {/* username and caption  */}
      <h4 className="post-text">
        <strong>{username}:</strong> {caption}
      </h4>
    </div>
  );
};

export default Post;
