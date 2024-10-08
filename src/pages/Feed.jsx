import { useDispatch } from "react-redux";
import Posts from "../components/Posts";
import { addNewPost } from "../store/actions/postActions";
import { postData } from "../data";

function Feed() {
  const dispatch = useDispatch();

  const handleClick = () => {
    const post = postData[Math.floor(Math.random() * postData.length)];
    dispatch(addNewPost(post));
  };
  return (
    <div>
      <h1 className="p-8 text-2xl font-bold">Home</h1>
      <div
        onClick={handleClick}
        className="border-solid border-y-2 border-gray-400 h-32"
      >
        Post burada
      </div>
      <Posts />
    </div>
  );
}

export default Feed;
