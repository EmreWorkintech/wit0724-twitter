import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Feed from "../pages/Feed";

function MainColumn() {
  return (
    <div className="w-2/4 h-screen border-r-2 border-l-2 border-solid border-gray-400">
      <Route path="/feed">
        <Feed />
      </Route>
    </div>
  );
}

export default MainColumn;
