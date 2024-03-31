import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login attempt with:", { email, password });
  };

  return (
    <Box maxWidth="md" mx="auto" mt={8}>
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        Login
      </Heading>
      <VStack spacing={4} as="form" onSubmit={handleLogin}>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={handleEmailChange} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={handlePasswordChange} />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
