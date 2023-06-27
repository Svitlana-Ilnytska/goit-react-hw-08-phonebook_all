import React, { Suspense, lazy } from "react";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { logInAuth } from "./redux/auth/auth-actions";
import { useFetchUserQuery } from "./redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "./redux/auth/auth-selectors";

import Navigation from "./components/Navigation/Navigation";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  useColorMode,
  IconButton,
  Box,
  Spinner,
  Flex,
} from "@chakra-ui/core";

// import "./App.css";

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
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />

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
        </ColorModeProvider>
      </ThemeProvider>
    </div>
  );
}
