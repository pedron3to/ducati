import Logo from '../Logo'
import { Box } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <Box
      align="center"
      h="100vh"
      position="relative"
      overflowX="hidden"
    >
      <Logo />
      {children}
    </Box>
  )
}

