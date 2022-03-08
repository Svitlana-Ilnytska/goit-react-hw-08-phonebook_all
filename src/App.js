import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
// import Spiner from "./components/Spiner/Spiner";

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

export default function App() {
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

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
