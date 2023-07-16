import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./hooks";


export default function PrivateRoute ({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = isLoggedIn && !isRefreshing;
  return (
    <Route
      {...routeProps}
      render={props =>
        shouldRedirect ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};