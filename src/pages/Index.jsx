import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      <Box bg="brand.700" py={20}>
        <Box maxWidth="container.lg" mx="auto" textAlign="center">
          <Heading as="h1" size="2xl" mb={4} color="white">
            Revolucione a Radiologia com IA
          </Heading>
          <Text fontSize="xl" color="white" mb={8}>
            LaudIA é o seu copiloto de IA para relatórios radiológicos. Experimente uma eficiência e precisão incomparáveis.
          </Text>
          <Button as={Link} to="/login" colorScheme="blue" size="lg" fontWeight="bold">
            Começar Agora
          </Button>
        </Box>
      </Box>
      {}
    </Box>
  );
};

export default Index;
