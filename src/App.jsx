import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import LeftColumn from "./layouts/LeftColumn";
import MainColumn from "./layouts/MainColumn";
import RightColumn from "./layouts/RightColumn";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  return (
    <div className={darkMode ? "dark" : null}>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/feed">
          <div className="flex w-3/4 m-auto">
            <LeftColumn />
            <MainColumn />
            <RightColumn setDarkMode={setDarkMode} darkMode={darkMode} />
          </div>
        </Route>
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
