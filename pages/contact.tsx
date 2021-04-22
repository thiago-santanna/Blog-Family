import Head from 'next/head'
import {
  Flex,
  Text,
  Container,
  Input,
  Textarea,
  VStack,
  Button,
  useToast
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";

export default function Contact() {
  const toast = useToast()

  const toastContact = () => {
    toast({
      title: "Obrigado pelo contato",
      description: "Nós entraremos em contato.",
      status: "success",
      duration: 9000,
      isClosable: true,
    })
  }

  return (
    <Main>
      <Head><title>Contact | Blog-family</title></Head>
      <Header />

      <Flex height="100%">
        <Container>
          <Flex
            align="center"
            justify="center"
            width="auto"
            mt="4"
            p="10"
            borderTopRadius="10"
            bgGradient="linear(to-r, green.300, gray.600)">
            <Text align="center" fontSize="4xl">
              Deixe seu recado
            </Text>
          </Flex>
          <Flex
            align="center"
            justify="center"
            width="auto"
            boxShadow="base"
            p="10"
            mb="4"
            bg="white"
            borderBottomRadius="10"
            color="gray.50"
            >
            <VStack spacing={1}>
              <Input placeholder="Nome" colorScheme="whatsapp" color="gray.900" width="64" />
              <Input placeholder="E-mail" color="gray.900" />
              <Input placeholder="Fone" color="gray.900" />
              <Textarea placeholder="Recado" color="gray.900" />
              <Button
              onClick={() => toastContact()}
                isFullWidth
                colorScheme="teal"
                variant="outline">
                Enviar
              </Button>
            </VStack>
          </Flex>


        </Container>
      </Flex>
      <Footer />
    </Main>
  )
}
