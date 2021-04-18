import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import Head from 'next/head'
import { Container, Flex, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Main>
      <Head><title>Home | Blog-family</title></Head>
      <Header />

      <Flex height="100%">
        <Container>
          <Text>Dashboard</Text>
        </Container>
      </Flex>

      <Footer />
    </Main>
  )
}
