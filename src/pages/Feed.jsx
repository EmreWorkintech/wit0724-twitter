import PostForm from "../components/PostForm";
import Posts from "../components/Posts";

function Feed() {
  return (
    <div>
      <h1 className="p-8 text-2xl font-bold">Home</h1>
      <PostForm />
      <Posts />
    </div>
  );
}

export default Feed;
