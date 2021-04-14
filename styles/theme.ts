import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            900: "#1A1D23"
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