import {Flex, Text, Icon, Stack, HStack, Link as ChakraLink} from '@chakra-ui/react'
import { FaWhatsapp, FaLinkedin, FaGithubSquare } from 'react-icons/fa'

export function Footer(){
    return(
        <Flex
          as="footer"
          width="100%"
          maxWidth={1440}
          height="14"
          backgroundColor={'green.400'}
          color={'gray.900'}
          mt="4"       
        > 
            <HStack m="auto" >
                <ChakraLink isExternal href="https://wa.me/5581992713545?text=Deixe seu recado">
                    <Icon as={FaWhatsapp} height="10" width="10"/>
                </ChakraLink>

                <ChakraLink isExternal href="https://www.linkedin.com/in/thiago-sant-anna-800a9a33/">
                    <Icon as={FaLinkedin} height="10" width="10"/>
                </ChakraLink>

                <ChakraLink isExternal href="https://github.com/xThiagoSant">
                    <Icon as={FaGithubSquare} height="10" width="10"/>
                </ChakraLink>
            </HStack>

            <Stack m="auto" >
                <Text fontWeight="400">
                    tss.webapps@gmail.com
                </Text>
                <Text fontWeight="400">
                    81 9-9271-3545 
                </Text>                    
            </Stack>                
        </Flex>
    )
}