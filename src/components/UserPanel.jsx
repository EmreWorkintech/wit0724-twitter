import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function UserPanel() {
  const { user } = useContext(UserContext);

  return (
    <div className="py-4 flex gap-4 items-start absolute bottom-0 right-8 left-4">
      <img
        src={`https://picsum.photos/200?${Math.floor(Math.random() * 1000)}`}
        className="w-14 rounded-full"
      />
      <div className="grow">
        <p className="font-bold mr-2">{user.username}</p>
        <p className="text-slate-500">{user.account}</p>
      </div>
      <i className="fa-solid fa-ellipsis"></i>
    </div>
  );
}

export default UserPanel;
