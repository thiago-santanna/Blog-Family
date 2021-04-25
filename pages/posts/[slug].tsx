import { ReactElement, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Container, Flex, Stack, Box, Image, HStack, Text, Icon } from '@chakra-ui/react'
import Head from 'next/head'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic'
import { RichText } from 'prismic-dom'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { FiCalendar, FiUser } from 'react-icons/fi'


interface IPost {
  id: string
  uid: string
  href: string
  first_publication_date: string
  data:{
    title: string
    author: string
    date_posted: string
    image: string
    content: string
  }
}

interface IHomeProps {
  post: IPost
}

export default function Post({ post }:IHomeProps):ReactElement {
  const [readPost, getReadPost] = useState(post)

  console.log(readPost)
  return (
    <Main>
      <Head>
        <title>Título Posts | BlogFamily</title>
      </Head>
      <Header />

      <Flex height="100%">
      <Container maxWidth={["sm", "md", "xl", 1000]}>

        <HStack>
          <Image
            src={readPost.data.image}
            alt="Foto_do_post"
            borderRadius="10"
            boxSize={["32","36", "40", "48"]}
            />
          <Text as="h1" fontSize={["xl","1xl","3xl"]}>
            {post.data.title}
          </Text>
        </HStack>

        <Stack spacing={4}>
          <Text>
            <Icon as={FiUser} boxSize="4" mr={4}/>
            {post.data.author}
          </Text>

          <Text>
              <Icon as={FiCalendar} boxSize="4" mr={4} />
              {post.data.date_posted}
          </Text>
        </Stack>

        <Flex mt={4} >
          <article dangerouslySetInnerHTML={{__html:readPost.data.content}} />
        </Flex>
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
      image: postsResult.data.image.url,
      content: RichText.asHtml(postsResult.data.content)
    }
  }

  return {
    props:{
      post,
    },
    revalidate: 43200
  }
}
