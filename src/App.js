import React, { Suspense, lazy } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { logInAuth } from "./redux/auth/auth-actions";
import { useFetchUserQuery } from "./redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
// import { getToken } from "./redux/auth/auth-selectors";
// import { setToken } from "./redux/auth/slice";
import { useAuth } from "./hooks";
import { refreshUser } from "./redux/auth/slice";
import Navigation from "./components/Navigation/Navigation";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  Box,
  Spinner,
  Flex,
} from "@chakra-ui/core";

const HomePage = lazy(() => import("./views/HomePage/HomePage"));
const SignUpPage = lazy(() => import("./views/SignUpPage/SignUpPage"));
const LogInPage = lazy(() => import("./views/LogInPage/LogInPage"));
const СontactsPage = lazy(() => import("./views/СontactsPage/СontactsPage"));

export default function App() {
  const dispatch = useDispatch();
  const { token } = useAuth();
  // const dispatch = useDispatch();
  // const history = useHistory();

  // const token = useSelector(setToken);
  // const { data: user } = useFetchUserQuery();

  // useEffect(() => {
  //   if (token !== "") {
  //     dispatch(logInAuth(true));
  //     user && history.push("/contacts");
  //   }
  // }, [user, token, history, dispatch]);

  // const dispatch = useDispatch();
  // const token = useSelector(authSelectors.getToken);

  // const { data: user } = useFetchUserQuery(token, {
  //   skip: token === null,
  // });

  // useEffect(() => {
  //   (async () => {
  //     await user;
  //     if (user) {
  //       dispatch(refreshUser(user));
  //     }
  //   })();
  // }, [user, dispatch]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Router>
            <Navigation />

            <Suspense
              fallback={
                <Flex
                  alignContent="center"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box>
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />
                  </Box>
                </Flex>
              }
            >
              <Switch>
                <PublicRoute exact path="/" restricted redirectTo="/contacts">
                  <HomePage />
                </PublicRoute>

                <PublicRoute
                  exact
                  path="/register"
                  restricted
                  redirectTo="/contacts"
                >
                  <SignUpPage />
                </PublicRoute>

                <PublicRoute
                  exact
                  path="/login"
                  restricted
                  redirectTo="/contacts"
                >
                  <LogInPage />
                </PublicRoute>

                <PrivateRoute exact path="/contacts" redirectTo="/login">
                  <СontactsPage />
                </PrivateRoute>

                <Route>
                  <HomePage />
                </Route>
              </Switch>
            </Suspense>
          </Router>
        </ColorModeProvider>
      </ThemeProvider>
    </div>
  );
}
