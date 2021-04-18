import {
  Flex,
  Image,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  HStack
} from '@chakra-ui/react'

import Link from 'next/link'

import { FiChevronRight } from 'react-icons/fi'

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
          <HStack m="auto">
            <Image width="12" src="logo.svg"/>

            <Breadcrumb spacing="8px" separator={<FiChevronRight color="gray.500" />}>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={Link} href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink as={Link} href="/posts">Posts</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={Link} href="/contact">Contact</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>

            <Image width="10" src="tx_marca_1.svg"/>
          </HStack>
        </Flex>
    )
}
