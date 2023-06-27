import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useCreateUserMutation } from "../../redux/auth/authSlice";
import { tokenAuth, logInAuth } from "../../redux/auth/auth-actions";

import {
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  Flex,
  useToast,
} from "@chakra-ui/core";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { data: user, isSuccess, isError, error }] =
    useCreateUserMutation();
  const dispatch = useDispatch();
  const history = useHistory();
  const toast = useToast();
  useEffect(() => {
    if (user) {
      dispatch(tokenAuth(user.token));
      dispatch(logInAuth(true));
      history.push("/contacts");
      console.log("registered");
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    if (isError) {
      switch (error.status) {
        case 400:
          toast({
            title: "An error occurred.",
            description: "Unable to create user account.",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        default:
          alert("Unknworn error.");
      }
    }
  }, [user, isSuccess, isError, error, dispatch, history]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;
      default:
        console.warn(`name - ${name} not matched`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: name,
      email: email,
      password: password,
    };
    createUser(user);
    reset();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Flex
      minHeight="100vh"
      width="full"
      align="flex-start"
      justifyContent="center"
      py={12}
    >
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
        py={6}
      >
        <Box textAlign="center" py={4}>
          <Heading>Sign Up</Heading>
        </Box>

        <Box my={8} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Login </FormLabel>
              <Input
                type="text"
                value={name}
                onChange={handleChange}
                name="name"
                placeholder="Enter login"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email address </FormLabel>
              <Input
                type="email"
                value={email}
                onChange={handleChange}
                name="email"
                placeholder="Enter email"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password </FormLabel>
              <Input
                type="password"
                value={password}
                onChange={handleChange}
                name="password"
                placeholder="Password"
              />
            </FormControl>
            <Button
              variantColor="teal"
              width="full"
              borderWidth={1}
              mt={4}
              type="submit"
            >
              Sign Up
            </Button>
          </form>
        </Box>

        <Text fontSize="sm">
          Copyright © 2023 by Svita Svitlana. All rights reserved.
        </Text>
      </Box>
    </Flex>
  );
}
