import React, { Suspense, lazy } from "react";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { logInAuth } from "./redux/auth/auth-actions";
import { useFetchUserQuery } from "./redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "./redux/auth/auth-selectors";

import Navigation from "./components/Navigation/Navigation";

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const SignUpPage = lazy(() =>
  import("./views/SignUpPage/SignUpPage" /* webpackChunkName: "MoviesPage" */)
);
const LogInPage = lazy(() =>
  import(
    "./views/LogInPage/LogInPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);
const HomePage = lazy(() =>
  import("./views/HomePage/HomePage" /* webpackChunkName: "HomePage" */)
);

const СontactsPage = lazy(() =>
  import(
    "./views/СontactsPage/СontactsPage" /* webpackChunkName: "СontactsPage" */
  )
);

export default function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  const token = useSelector(getToken);
  const { data: user } = useFetchUserQuery(token);

  useEffect(() => {
    if (token !== "") {
      dispatch(logInAuth(true));
      user && history.push("/contacts");
    }
  }, [user, token, history, dispatch]);
  return (
    <div>
      <Navigation />

      <Suspense fallback={<p>loader...</p>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/register" exact>
            <SignUpPage />
          </Route>

          <Route path="/login" exact>
            <LogInPage />
          </Route>

          <Route path="/contacts" exact>
            <СontactsPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
