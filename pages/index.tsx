import { Container, Flex, Stack } from '@chakra-ui/react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'


export default function Home() {
  return (
    <Main>
      <Header />
      <Container>
        <Flex direction="column">
          <h1>IMAGEM</h1>
          <h1>IMAGEM</h1>
          <h1>IMAGEM</h1>
          <h1>IMAGEM</h1>
        </Flex>
        <Stack direction="row">
          <h1>Autor</h1>
          <h1>14/04/2021 11:32</h1>
        </Stack>
        <article>
          <p>
            There are many benefits to a joint design and development system. 
            Not only does it bring benefits to the design team, but it also brings 
            benefits to engineering teams. It makes sure that our experiences have 
            a consistent look and feel, not just in our design specs, but in production            
          </p>
          <p>
            There are many benefits to a joint design and development system. 
            Not only does it bring benefits to the design team, but it also brings 
            benefits to engineering teams. It makes sure that our experiences have 
            a consistent look and feel, not just in our design specs, but in production            
          </p>                 
        </article>
        <br/>
        <br/>
        <h1>OUTRO POST</h1>
        <br/>
        <br/>
        <Flex direction="column">
          <h1>IMAGEM</h1>
          <h1>IMAGEM</h1>
          <h1>IMAGEM</h1>
          <h1>IMAGEM</h1>
        </Flex>
        <Stack direction="row">
          <h1>Autor</h1>
          <h1>14/04/2021 11:32</h1>
        </Stack>
        <article>
          <p>
            There are many benefits to a joint design and development system. 
            Not only does it bring benefits to the design team, but it also brings 
            benefits to engineering teams. It makes sure that our experiences have 
            a consistent look and feel, not just in our design specs, but in production            
          </p>
          <p>
            There are many benefits to a joint design and development system. 
            Not only does it bring benefits to the design team, but it also brings 
            benefits to engineering teams. It makes sure that our experiences have 
            a consistent look and feel, not just in our design specs, but in production            
          </p>                 
        </article>        
      </Container>
      <Footer />
    </Main>
  )
}
