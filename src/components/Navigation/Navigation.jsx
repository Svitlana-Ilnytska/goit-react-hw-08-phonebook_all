import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  useFetchUserQuery,
  useLogOutUserMutation,
} from "../../redux/auth/authSlice";
import { tokenAuth, logInAuth } from "../../redux/auth/auth-actions";
import { getToken } from "../../redux/auth/auth-selectors";
import { getIsLogInAuth } from "../../redux/auth/auth-selectors";
import UserMenu from "../UserMenu/UserMenu";

import { Box, Flex, Link, Image, Stack, Text } from "@chakra-ui/core";

import { useColorMode, IconButton } from "@chakra-ui/core";

export default function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode();

  const dispatch = useDispatch();
  const history = useHistory();

  const token = useSelector(getToken);
  const isLogInAuth = useSelector(getIsLogInAuth);

  const { data: user } = useFetchUserQuery(token);
  const [logout] = useLogOutUserMutation(token);

  const logoutUser = (token) => {
    logout(token);
    dispatch(logInAuth(false));
    dispatch(tokenAuth(""));
    history.push("/login");
  };

  return (
    <>
      <Box px={8} bg={colorMode === "light" ? "gray.100" : "gray.900"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link href="/">
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
              {user && isLogInAuth ? (
                <UserMenu
                  name={user.name}
                  email={user.email}
                  onLogOut={() => logoutUser(token)}
                />
              ) : (
                <>
                  <Link px={4} ml={3} href="register">
                    Sign Up
                  </Link>
                  <Link px={4} href="login">
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
