import React from "react";
import Head from 'next/head'
import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import { Flex } from "@chakra-ui/react";
import { Footer } from "../../components/Footer";

export default function ListPosts(){
  return (
    <Main>
      <Head>
        <title>Lista de Posts | BlogFamily</title>
      </Head>
      <Header />

      <Flex height="100%">
        <h1>Listagem de posts pego do Prismic</h1>
      </Flex>

      <Footer />

    </Main>
  )
}
