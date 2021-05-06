import { GetStaticProps } from 'next'
import Link from 'next/link'
import React, { ReactElement, useState } from "react";
import Head from 'next/head'
import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import { Flex, Container, Text, List, ListItem, Icon } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic'
import { RichText } from 'prismic-dom'
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi'

interface IListPost {
  id: string
  uid: string
  href: string
  first_publication_date: string
  data:{
    title: string
    author: string
    date_posted: string
  }
}

interface IHomeProps {
  resultposts: IListPost[]
}

export default function ListPosts({ resultposts }:IHomeProps):ReactElement {
  const [posts, setPosts] = useState<IListPost[]>(resultposts)

  return (
    <Main>
      <Head>
        <title>Lista de Posts | BlogFamily</title>
      </Head>
      <Header />

      <Flex height="100%" >
        <Container>
          <List spacing={4}>
          {posts.map(post => (
              <ListItem key={post.id} borderBottom="1px" borderColor="green.400" >
                <Flex direction="column" >
                  <Text fontSize={["8", "9", "10"]} pb="4" alignItems="center">
                    <Icon as={FiCalendar} boxSize="4" mr={4} />
                    {post.data.date_posted}
                  </Text>
                  <Text fontSize={["md","lg"]}>
                    <Icon as={FiUser} boxSize="4" mr={4}/>
                    {post.data.author}
                  </Text>
                  <Text as="h1" fontSize={["xl","1xl","3xl"]}>
                  {post.data.title}
                    <Link href={`/posts/${post.uid}`}>
                        <a>
                          <Icon color="yellow.300" as={FiArrowRight} boxSize="6"/>
                        </a>
                    </Link>
                  </Text>
                </Flex>
              </ListItem>
              ))}
          </List>
        </Container>
      </Flex>
      <Footer />
    </Main>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const posts = await prismic.query(
    [Prismic.Predicates.at("document.type", "posts")],
    {
      pageSize: 50,
      orderings: "[document.last_publications_date desc],"
    }
  )

  const resultposts:IListPost[] = posts.results.map(post => {
    return {
      id: post.id,
      uid: post.uid,
      first_publication_date: post.first_publication_date,
      href: post.href,
      data: {
        author: RichText.asText(post.data.author),
        date_posted: format(
          new Date(post.data.date_post),
          'dd,MMM yyyy',
          {
            locale: ptBR,
          }
        ),
        title:RichText.asText(post.data.title)
      }
    }
  })
  return {
    props:{
      resultposts
    },
    revalidate: 43200
  }
}
