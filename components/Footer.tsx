import {Flex, Image, Text, Icon} from '@chakra-ui/react'
import { FaWhatsapp, FaLinkedin, FaGithubSquare } from 'react-icons/fa'

export function Footer(){
    return(
        <Flex
          as="header"
          width="100%"
          maxWidth={1440}
          height="14"
          mx="auto"
          alignItems="center"
          backgroundColor={'green.400'}
          color={'gray.900'}          
        > 
            <Image boxSize="100px" height="inherit" src="logo.svg"/>
            <Flex align="center" m="auto" height="inherit">
                <Image boxSize="100px" height="inherit" src="tx_marca_1.svg"/>
                <Text
                    fontWeight="bold"
                    fontSize="3xl"
                    letterSpacing="tight"
                    width="64"
                >
                    Serviços Web
                </Text>
            </Flex>
        </Flex>
    )
}