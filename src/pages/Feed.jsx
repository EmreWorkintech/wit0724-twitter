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
      <h1>Home</h1>
      <div onClick={handleClick}>Post burada</div>
      <Posts />
    </div>
  );
}

export default Feed;
