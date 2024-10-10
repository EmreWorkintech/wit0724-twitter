import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import LeftColumn from "./layouts/LeftColumn";
import MainColumn from "./layouts/MainColumn";
import RightColumn from "./layouts/RightColumn";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage(
    "darkMode",
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? true
      : false
  );

  return (
    <div className={darkMode ? "dark" : null}>
      <div className=" dark:bg-slate-700 dark:text-slate-100">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/feed">
            <div className="flex w-3/4 m-auto">
              <LeftColumn />
              <MainColumn />
              <RightColumn setDarkMode={setDarkMode} darkMode={darkMode} />
            </div>
          </PrivateRoute>
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
    </div>
  );
}

export default App;
