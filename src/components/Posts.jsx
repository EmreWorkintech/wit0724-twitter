import { useEffect } from "react";
import { postData } from "../data";
import PostItem from "./PostItem";
import { useDispatch, useSelector } from "react-redux";
import { setAllPosts } from "../store/actions/postActions";

function Posts() {
  const posts = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllPosts(postData));
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
