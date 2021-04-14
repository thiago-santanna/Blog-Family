import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/Main'


export default function Home() {
  return (
    <Container>
      <Header />

      <Main>
        <h1>Posts</h1>
      </Main>
      
      <Footer />
    </Container>
  )
}
