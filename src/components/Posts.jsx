import PostItem from "./PostItem";
import { useGetTweets } from "../services/queries";
import { convertToTweetModel } from "../utils/utils";

function Posts() {
  const { data, error, isPending } = useGetTweets();

  if (isPending) return <p>loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {convertToTweetModel(data).map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
