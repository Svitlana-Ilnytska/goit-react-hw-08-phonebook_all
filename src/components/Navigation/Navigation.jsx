import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  useFetchUserQuery,
  useLogOutUserMutation,
} from "../../redux/auth/operations";
// import { tokenAuth, logInAuth } from "../../redux/auth/auth-actions";
import {getLoggedIn} from "../../redux/auth/selectors"
import { getToken } from "../../redux/auth/selectors";
// import { getIsLogInAuth } from "../../redux/auth/auth-selectors";
// import { setToken } from "../../redux/auth/slice";
import UserMenu from "../UserMenu/UserMenu";
import { NavLink } from "react-router-dom";
import { Box, Flex, Link, Image, Stack, Text } from "@chakra-ui/core";
import { setlogOut } from "../../redux/auth/slice";
import { useColorMode, IconButton } from "@chakra-ui/core";
import { useAuth } from '../../hooks';

export default function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode();

  const dispatch = useDispatch();
  const history = useHistory();

  const {token} = useAuth();
  console.log('token', token)
  // const isLogInAuth = useSelector(getLoggedIn);
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();

  console.log('isLoggedIn', isLoggedIn)
  // const { data: user } = useFetchUserQuery(token);
  const [logout] = useLogOutUserMutation();
console.log('useer', user)
  const logoutUser = (token) => {
    logout(token);
    dispatch(setlogOut());
    // dispatch(setToken(""));
    console.log('useer', user)
    // dispatch(isLogInAuth(false));
    history.push("/login");
  };

  return (
    <>
      <Box px={8} bg={colorMode === "light" ? "gray.100" : "gray.900"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link as={NavLink} to="/">
            <Flex alignItems=" center" px={4}>
              <Image
                src="https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-ukraine-icon-circle-png-image_1817366.jpg"
                size="35px"
                mr={3}
                rounded
              />
              <Text> Ukrainian phonebook</Text>
            </Flex>
          </Link>

          <Flex alignItems={"center"}>
            <Box>
              <IconButton
                icon={colorMode === "light" ? "moon" : "sun"}
                onClick={toggleColorMode}
              />
            </Box>

            <Stack direction={"row"} spacing={7}>
              {user && isLoggedIn ? (
                <UserMenu
                  name={user.name}
                  email={user.email}
                  onLogOut={() => logoutUser()}
                />
              ) : (
                <>
                  <Link px={4} ml={3}  as={NavLink} to="/register">
                    Sign Up
                  </Link>
                  <Link px={4} as={NavLink}  to="/login">
                    Log In
                  </Link>
                </>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
