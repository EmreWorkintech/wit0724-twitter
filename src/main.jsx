import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext.jsx";
import { Provider } from "react-redux";
import { myStore } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContextProvider>
      <Provider store={myStore}>
        <App />
      </Provider>
    </UserContextProvider>
  </BrowserRouter>
);
