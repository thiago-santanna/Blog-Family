import { Flex, FlexProps} from '@chakra-ui/react'

export const Container = (props: FlexProps) =>{
    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            height="100vh"
            maxWidth={1440}
            {...props}
        />
    )
}