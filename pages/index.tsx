import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import Head from 'next/head'
import {
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  Box
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Main>
      <Head><title>Home | Blog-family</title></Head>
      <Header />
      <Flex>
        <Container>
          <VStack>
            <Heading
              as="h1"
              size="xl"
              fontWeight="bold"
              fontSize={["30",
              "40",
              "40"]}>Bebê a bordo</Heading>
              <Text>Diário de bordo do nosso pequeno milagre</Text>
            <Box width={["100","64", "72", "80"]}>
              <Image src="/pais.png" alt="Foto_dos_pais" borderRadius="10" />
            </Box>
          </VStack>
        </Container>
      </Flex>
      <Footer />
    </Main>
  )
}
