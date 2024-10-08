import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import Analytics from "./Analytics";

/* eslint-disable react/prop-types */
function PostItem({ post }) {
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
          <span className="text-slate-500">
            {post.user.account} - {postTime}
          </span>
        </div>
        <p className="mt-2">lorem ipsum hsdlkjfhkasjhf lkashfadsfdsagf</p>
        <Analytics data={post.analytics} />
      </div>
      <i className="fa-solid fa-ellipsis"></i>
    </div>
  );
}

export default PostItem;
