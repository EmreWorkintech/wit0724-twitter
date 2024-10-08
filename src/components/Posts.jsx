import { useEffect, useState } from "react";
import { postData } from "../data";
import axios from "axios";
import PostItem from "./PostItem";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then(() => {
      setPosts(postData);
    });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
