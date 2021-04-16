import {
  Box,
  BoxProps as ChakraBoxProps
} from "@chakra-ui/react"

interface BoxProps extends ChakraBoxProps {
  title: string;
  information: string;
}

export default function BikeInformation({ title, information }: BoxProps) {
  return (
    <>
      <Box textStyle="h3" >{title}</Box>
      <Box textStyle="h2" letterSpacing={3}>{information}</Box>
    </>
  )
}
