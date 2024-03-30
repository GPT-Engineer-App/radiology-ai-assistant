import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Box as="nav" bg="blue.500" py={4}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Heading as="h1" color="white" size="lg">
              LaudIA
            </Heading>
            <Stack direction="row" spacing={8}>
              <Link color="white" fontWeight="bold" href="#home">
                Home
              </Link>
              <Link color="white" fontWeight="bold" href="#about">
                About
              </Link>
              <Link color="white" fontWeight="bold" href="#services">
                Services
              </Link>
              <Link color="white" fontWeight="bold" href="#pricing">
                Pricing
              </Link>
              <Link color="white" fontWeight="bold" href="#contact">
                Contact
              </Link>
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" id="home" py={20}>
        <Container maxW="container.lg">
          <Flex align="center" direction={{ base: "column", md: "row" }}>
            <Box flex={1} mr={{ md: 8 }}>
              <Heading as="h2" mb={4} size="2xl">
                Revolucione a Radiologia com IA
              </Heading>
              <Text fontSize="xl" mb={8}>
                LaudIA é o seu copiloto de IA para relatórios radiológicos. Experimente uma eficiência e precisão incomparáveis.
              </Text>
              <Button colorScheme="blue" size="lg">
                Começar Agora
              </Button>
            </Box>
            <Box flex={1}>
              <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyYWRpb2xvZ2lzdCUyMHVzaW5nJTIwQUl8ZW58MHx8fHwxNzExODI1MzM2fDA&ixlib=rb-4.0.3&q=80&w=1080" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {}
      <Box as="section" bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" mb={12} size="xl" textAlign="center">
            Why LaudIA
          </Heading>
          <VStack align="start" spacing={8}>
            <Box>
              <Heading as="h3" mb={4} size="lg">
                Unmatched Accuracy
              </Heading>
              <Text>LaudIA's advanced AI algorithms deliver the highest level of accuracy in radiological analysis, reducing diagnostic errors.</Text>
            </Box>
            <Box>
              <Heading as="h3" mb={4} size="lg">
                Seamless Integration
              </Heading>
              <Text>Our platform integrates effortlessly with your existing PACS/RIS systems, ensuring a smooth transition and minimal disruption to your workflow.</Text>
            </Box>
            <Box>
              <Heading as="h3" mb={4} size="lg">
                Proven Results
              </Heading>
              <Text>LaudIA has a proven track record of improving diagnostic accuracy and efficiency in radiology practices worldwide.</Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {}
      <Box as="section" id="features" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" mb={12} size="xl" textAlign="center">
            Key Features
          </Heading>
          <Flex direction={{ base: "column", md: "row" }} justify="center">
            <Box maxW="sm" p={8} textAlign="center">
              <Image src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGFuYWx5c2lzJTIwaWNvbnxlbnwwfHx8fDE3MTE4MjUzMzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Analysis" mb={4} />
              <Heading as="h3" mb={4} size="lg">
                Análise Aumentada por IA
              </Heading>
              <Text>Aproveite o poder da inteligência artificial para analisar exames radiológicos e gerar relatórios precisos.</Text>
            </Box>
            <Box maxW="sm" p={8} textAlign="center">
              <Image src="https://images.unsplash.com/photo-1707733260992-73ff6dbed163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlZmZpY2llbmN5JTIwaWNvbnxlbnwwfHx8fDE3MTE4MjUzMzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Efficiency" mb={4} />
              <Heading as="h3" mb={4} size="lg">
                Aumento de Eficiência
              </Heading>
              <Text>Agilize seu fluxo de trabalho radiológico e concentre-se em tarefas de maior valor com os insights automatizados do LaudIA.</Text>
            </Box>
            <Box maxW="sm" p={8} textAlign="center">
              <Image src="https://images.unsplash.com/photo-1707759642885-42994e023046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxleHBlcnQlMjBhc3Npc3RhbmNlJTIwaWNvbnxlbnwwfHx8fDE3MTE4MjUzMzd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Expert Assistance" mb={4} />
              <Heading as="h3" mb={4} size="lg">
                Assistência Especializada
              </Heading>
              <Text>Beneficie-se da revisão do laudo que combina conhecimento de especialistas com grandes quantidades de dados radiológicos.</Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      {}
      <Box as="section" bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" mb={12} size="xl" textAlign="center">
            What Our Customers Say
          </Heading>
          <VStack align="start" spacing={8}>
            <Box>
              <Text fontSize="xl" mb={4}>
                "LaudIA has revolutionized our radiology practice. The AI-powered insights have significantly improved our diagnostic accuracy and efficiency."
              </Text>
              <Text fontWeight="bold">- Dr. João Silva, Radiologista Chefe, Hospital São Paulo</Text>
            </Box>
            <Box>
              <Text fontSize="xl" mb={4}>
                "The seamless integration with our existing systems and the exceptional support from the LaudIA team made the transition to AI-assisted radiology effortless."
              </Text>
              <Text fontWeight="bold">- Dr. Ana Santos, Diretora de Radiologia, Clínica Radiológica Moderna</Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* About Section */}
      <Box as="section" bg="gray.100" id="about" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" mb={12} size="xl" textAlign="center">
            About Us
          </Heading>
          <VStack align="start" spacing={8}>
            <Box>
              <Heading as="h3" mb={4} size="lg">
                Our Mission
              </Heading>
              <Text>Transformar a prática radiológica com soluções de IA que elevam a qualidade do diagnóstico e a produtividade dos radiologistas.</Text>
            </Box>
            <Box>
              <Heading as="h3" mb={4} size="lg">
                Our Vision
              </Heading>
              <Text>Ser líder em inovação de IA em radiologia, estabelecendo novos padrões para cuidados de saúde precisos e acessíveis.</Text>
            </Box>
            <Box>
              <Heading as="h3" mb={4} size="lg">
                Our Team
              </Heading>
              <Text>Conheça os especialistas por trás da tecnologia LaudIA – uma equipe dedicada de radiologistas, engenheiros de IA e desenvolvedores.</Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box as="section" id="services" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" mb={12} size="xl" textAlign="center">
            Our Services
          </Heading>
          <VStack align="start" spacing={8}>
            <Box>
              <Heading as="h3" mb={4} size="lg">
                Diagnóstico Assistido por IA
              </Heading>
              <Text>Utilize nossa IA para detectar padrões complexos em imagens radiológicas e reduzir a taxa de erros.</Text>
            </Box>
            <Box>
              <Heading as="h3" mb={4} size="lg">
                Integração com Sistemas Existentes
              </Heading>
              <Text>Nossa plataforma se integra perfeitamente com PACS/RIS existentes, otimizando seu fluxo de trabalho atual.</Text>
            </Box>
            <Box>
              <Heading as="h3" mb={4} size="lg">
                Treinamento e Suporte
              </Heading>
              <Text>Oferecemos treinamento completo e suporte contínuo para garantir que você aproveite ao máximo as capacidades do LaudIA.</Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box as="section" bg="gray.100" id="pricing" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" mb={12} size="xl" textAlign="center">
            Pricing
          </Heading>
          <VStack align="start" spacing={8}>
            <Box>
              <Heading as="h3" mb={4} size="lg">
                Planos Flexíveis
              </Heading>
              <Text>Escolha entre uma variedade de planos de assinatura que se adaptam às necessidades do seu serviço de radiologia.</Text>
            </Box>
            <Box>
              <Heading as="h3" mb={4} size="lg">
                Demonstração Gratuita
              </Heading>
              <Text>Agende uma demonstração gratuita e veja como o LaudIA pode transformar seu processo de diagnóstico.</Text>
            </Box>
            <Box>
              <Heading as="h3" mb={4} size="lg">
                Garantia de Satisfação
              </Heading>
              <Text>Comprometemo-nos com a sua satisfação. Experimente o LaudIA sem riscos com a nossa garantia de reembolso.</Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box as="section" id="contact" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" mb={12} size="xl" textAlign="center">
            Contact Us
          </Heading>
          <VStack align="start" spacing={8}>
            <Box>
              <Heading as="h3" mb={4} size="lg">
                Formulário de Contato
              </Heading>
              <Text>Tem perguntas ou precisa de assistência? Preencha o formulário de contato e entraremos em contato o mais breve possível.</Text>
            </Box>
            <Box>
              <Heading as="h3" mb={4} size="lg">
                Informações de Contato
              </Heading>
              <Text>Encontre todas as maneiras de entrar em contato conosco, incluindo telefone, e-mail e endereço físico.</Text>
            </Box>
            <Box>
              <Heading as="h3" mb={4} size="lg">
                Mapa do Local
              </Heading>
              <Text>Veja onde estamos localizados e como chegar até nós.</Text>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.900" color="white" py={12}>
        <Container maxW="container.lg">
          <Flex direction={{ base: "column", md: "row" }} justify="space-between">
            <Box mb={{ base: 8, md: 0 }}>
              <Heading as="h4" mb={4} size="md">
                Links Rápidos
              </Heading>
              <Stack spacing={2}>
                <Link href="#home">Home</Link>
                <Link href="#about">About</Link>
                <Link href="#services">Services</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#contact">Contact</Link>
              </Stack>
            </Box>
            <Box mb={{ base: 8, md: 0 }}>
              <Heading as="h4" mb={4} size="md">
                Redes Sociais
              </Heading>
              <Stack direction="row" spacing={4}>
                <Link href="#">
                  <FaFacebook />
                </Link>
                <Link href="#">
                  <FaTwitter />
                </Link>
                <Link href="#">
                  <FaInstagram />
                </Link>
                <Link href="#">
                  <FaLinkedin />
                </Link>
              </Stack>
            </Box>
            <Box>
              <Heading as="h4" mb={4} size="md">
                Legal
              </Heading>
              <Stack spacing={2}>
                <Link href="#">Termos de Uso</Link>
                <Link href="#">Política de Privacidade</Link>
              </Stack>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
