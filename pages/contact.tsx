import Head from 'next/head'
import { Flex, Text, Container } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";

export default function Contact() {
  return (
    <Main>
      <Head><title>Contact | Blog-family</title></Head>
      <Header />

      <Flex height="100%">
        <Container>
          <Text>Contact</Text>
        </Container>
      </Flex>

      <Footer />
    </Main>
  )
}
