import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import Analytics from "./Analytics";
import { useDeleteTweet } from "../services/mutations";

/* eslint-disable react/prop-types */
function PostItem({ post }) {
  const mutation = useDeleteTweet();

  const handleClick = () => {
    mutation.mutate(post.id);
  };

  if (mutation.isPending) return <p>Deleting tweet...</p>;

  if (mutation.error) return <p>Error: {mutation.error.message}</p>;

  const postTime = formatDistanceToNow(post.createdAt, {
    addSuffix: true,
    locale: tr,
  });

  return (
    <div className="px-8 py-4 flex gap-8 items-start w-full">
      <img
        src={`https://picsum.photos/200?${Math.floor(Math.random() * 1000)}`}
        className="w-14 rounded-full"
      />
      <div className="grow">
        <div>
          <span className="font-bold mr-2">{post.user.username}</span>
          <span className="text-slate-500  dark:text-slate-300">
            {post.user.account} - {postTime}
          </span>
        </div>
        <p className="mt-1">{post.tweet}</p>
        <Analytics data={post.analytics} />
      </div>
      <i onClick={handleClick} className="fa-solid fa-ellipsis"></i>
    </div>
  );
}

export default PostItem;
