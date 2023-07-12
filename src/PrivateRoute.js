import { Route, Redirect } from "react-router-dom";
// import { useAuth } from "./hooks";

// export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
//   const { getLoggedIn } = useAuth();
//   const shouldRedirect = !getLoggedIn ;
//   // && !isRefreshing;

//   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
// };


export const PriveteRoute = ({
    component: Component,
    isAuthenticated,
    redirectTo,
    ...routeProps
  }) => {
    return (
      <Route
        {...routeProps}
        render={props =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to={redirectTo} />
          )
        }
      />
    );
  };