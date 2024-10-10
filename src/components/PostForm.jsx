import { useCreateTweet } from "../services/mutations";

function PostForm() {
  const mutation = useCreateTweet();

  const handleClick = () => {
    mutation.mutate();
  };

  if (mutation.isPending) return <p>Adding tweet...</p>;

  if (mutation.error) return <p>Error: {mutation.error.message}</p>;

  return (
    <div
      onClick={handleClick}
      className="border-solid border-y-2 border-gray-400 h-32"
    >
      Post burada
    </div>
  );
}

export default PostForm;
