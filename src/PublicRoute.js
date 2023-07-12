import { useAuth } from "./hooks";
import { Route, Redirect } from 'react-router-dom';

export default function PublicRoute ({
  component: Component,
  restricted = false,
  redirectTo = '/',
  ...rest
})  {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn && restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};