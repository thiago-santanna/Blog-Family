import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Link as ChakraLink
} from '@chakra-ui/react'

import Link from 'next/link'
import React from 'react'
import { FiHome, FiMenu, FiMail, FiBookOpen } from 'react-icons/fi'


export function Header(){
    return(
        <Flex
          as="header"
          width="100%"
          maxWidth={1440}
          height="12"
          alignItems="center"
          color={'gray.900'}
          mb="4"
          bgGradient="linear(to-r, #11f511, gray.900)"
        >

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<FiMenu />}
            variant="outline"
          />
          <MenuList>
            <Link href="/" passHref >
              <ChakraLink>
                <MenuItem icon={<FiHome />} >
                  <Text>Home</Text>
                </MenuItem>
              </ChakraLink>
            </Link>

            <Link href="/posts" passHref>
              <ChakraLink>
                <MenuItem icon={<FiBookOpen />} >
                  <Text>Postagens</Text>
                </MenuItem>
              </ChakraLink>
            </Link>

            <Link href="/contact" passHref >
              <ChakraLink>
                <MenuItem icon={<FiMail />} >
                  <Text>Contato</Text>
                </MenuItem>
              </ChakraLink>
            </Link>
          </MenuList>
        </Menu>

          <Text p={4} fontWeight="bold">
            BlogFamily - Obrigado pela visita!
          </Text>
        </Flex>
    )
}
