/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";

export default function PrivateRoute({ children, ...rest }) {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={() => (isLoggedIn ? children : <Redirect to="/login" />)}
    />
  );
}
