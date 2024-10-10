import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext.jsx";
import { Provider } from "react-redux";
import { myStore } from "./store/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <UserContextProvider>
        <Provider store={myStore}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </Provider>
      </UserContextProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
