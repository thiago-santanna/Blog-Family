import { ReactElement, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Container, Flex, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic'
import { RichText } from 'prismic-dom'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IPost {
  id: string
  uid: string
  href: string
  first_publication_date: string
  data:{
    title: string
    author: string
    date_posted: string
    image:{
      url: string
    }
  }
}

interface IHomeProps {
  resultposts: IPost[]
}

export default function Post({ resultposts }:IHomeProps):ReactElement {
  const [posts, setPosts] = useState<IPost[]>(resultposts)

  return (
    <Main>
      <Head>
        <title>Título Posts | BlogFamily</title>
      </Head>
      <Header />

      <Flex height="100%">
      <Container>
          <Flex direction="column">
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
      </Flex>
      <Footer />
    </Main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [],
    fallback: "blocking"
  }
}

export const getStaticProps:GetStaticProps = async ({ params }) => {
  const { slug } = params
  const prismic = getPrismicClient()
  const postsResult = await prismic.getByUID('posts', String(slug), {})

  const post:IPost = {
    id: postsResult.id,
    uid: postsResult.uid,
    first_publication_date: postsResult.first_publication_date,
    href: postsResult.href,
    data:{
      author: RichText.asText(postsResult.data.author),
      title: RichText.asText(postsResult.data.title),
      date_posted: format(
        new Date(postsResult.data.date_post),
        'dd, MMM, yyyy',
        {
          locale: ptBR
        }
      ),
      image: postsResult.data.image.url
    }
  }

  console.log(post)

  return {
    props:{

    }
  }
}
