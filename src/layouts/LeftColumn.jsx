import { useContext } from "react";
import NavigationMenu from "../components/NavigationMenu";
import { UserContext } from "../contexts/UserContext";

function LeftColumn() {
  const { user } = useContext(UserContext);

  return (
    <div className="w-1/4 h-screen p-8 relative">
      <i className="fa-brands fa-twitter text-blue-400 text-5xl"></i>
      <NavigationMenu />
      <button className="bg-blue-400 rounded-full w-full p-4 text-center text-white">
        Tweet
      </button>
      <div className="absolute bottom-0 left-0 right-0">
        {user.username + user.account}
      </div>
    </div>
  );
}

export default LeftColumn;
