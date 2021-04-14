import {Flex, Image, Text} from '@chakra-ui/react'

export const Header = () =>{
    return(
        <Flex
          as="header"
          width="100%"
          maxWidth={1440}
          height="14"
          alignItems="center"
          backgroundColor={'green.400'}
          color={'gray.900'}
          mb="4"          
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