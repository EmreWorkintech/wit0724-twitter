import NavigationMenu from "../components/NavigationMenu";
import UserPanel from "../components/UserPanel";

function LeftColumn() {
  return (
    <div className="w-1/4 h-screen p-8 relative">
      <i className="fa-brands fa-twitter text-blue-400 text-5xl"></i>
      <NavigationMenu />
      <button className="bg-blue-400 rounded-full w-full p-4 text-center text-white">
        Tweet
      </button>
      <UserPanel />
    </div>
  );
}

export default LeftColumn;
