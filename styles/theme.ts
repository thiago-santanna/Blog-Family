import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            900: "#121214",
            50: "#F0F2F5",
            200: "#969CB2"
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global:{
            body: {
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
})
