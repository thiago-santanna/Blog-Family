import { useState, FormEvent } from 'react'
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
} from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Main } from "../components/Main"

interface contactsData {
  name: string;
  email: string;
  phone: string;
  message: string;
  webapp: string;
}

export default function Contact() {
  const toast = useToast()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const setCleancontact = () =>{
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
  }

  const toastContact = () => {
    toast({
      title: "Obrigado pelo contato",
      description: "Nós entraremos em contato.",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }

  const handleCreateContact = async (event: FormEvent):Promise<void> => {
    event.preventDefault()

    const response = await fetch(
        `/api/dbcontact?name=${name}&email=${email}&phone=${phone}&message=${message}`
    )

    if (response.status === 200) {
      setCleancontact()
      toastContact()
    }
    else{
      console.log(response.json())
    }
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
            bgGradient="linear(to-r, #319795, gray.900)">
            <Text align="center" fontSize="4xl">
              Deixe seu recado
            </Text>
          </Flex>

          <form onSubmit={handleCreateContact}>
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
                <Input
                  placeholder="Nome"
                  colorScheme="whatsapp"
                  color="gray.900"
                  width="64"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />

                <Input
                  placeholder="E-mail"
                  color="gray.900"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)} />

                <Input
                  placeholder="Fone"
                  color="gray.900"
                  value={phone}
                  type="phone"
                  onChange={(e) => setPhone(e.target.value)}/>

                <Textarea
                  placeholder="Recado"
                  color="gray.900"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}/>

                <Button
                  isFullWidth
                  colorScheme="teal"
                  variant="outline"
                  type="submit"
                  >
                  Enviar
                </Button>
              </VStack>
            </Flex>
          </form>
        </Container>
      </Flex>
    </Main>
  )
}
