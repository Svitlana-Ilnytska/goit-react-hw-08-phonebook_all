import { useAuth } from "./hooks";
import { Route, Redirect } from 'react-router-dom';

export default function PublicRoute ({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      {...routeProps}
      render={props =>
        isLoggedIn && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

