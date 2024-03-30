import React from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading } from "@chakra-ui/react";

const Login = () => {
  return (
    <Box maxWidth="md" mx="auto" mt={8}>
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        Login
      </Heading>
      <Box p={8} borderWidth={1} borderRadius="lg" boxShadow="lg" bg="white">
        <VStack spacing={6}>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button width="full" colorScheme="blue" size="lg" type="submit">
            Sign In
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Login;
