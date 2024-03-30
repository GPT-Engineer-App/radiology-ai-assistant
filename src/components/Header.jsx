import React from "react";
import { Box, Flex, Heading, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <Box bg="brand.800" py={4}>
      <Flex maxWidth="container.lg" mx="auto" align="center">
        <Heading as="h1" size="lg" color="white">
          LaudIA
        </Heading>
        <Spacer />
        <Link as={RouterLink} to="/" color="white" fontWeight="medium" mr={4}>
          Home
        </Link>
        <Link as={RouterLink} to="/login" color="white" fontWeight="medium">
          Login
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
