import React from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

const Login = () => {
  return (
    <VStack spacing={4} padding={8}>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <Button width="full" mt={4} type="submit">
        Sign In
      </Button>
    </VStack>
  );
};

export default Login;
