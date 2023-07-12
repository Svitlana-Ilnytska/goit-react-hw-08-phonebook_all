import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./hooks";

export default function PrivateRoute({
  component: Component,
  redirectTo = "/",
  ...rest
}) {
  const { isLoggedIn } = useAuth();
console.log(isLoggedIn)
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
}
