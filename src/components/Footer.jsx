import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="brand.800" py={4}>
      <Text align="center" color="white">
        &copy; {new Date().getFullYear()} LaudIA. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
