import { Box } from "@chakra-ui/react"
import Image from 'next/image'

export default function Logo() {
  return (
    <>
      <Box p={4}>
        <Image
          src="/logo.svg"
          alt="Ducati Logo"
          width={90}
          height={97}
        />
      </Box>
      <Box >
        <Image
          src="/monster.svg"
          alt="Monster Logo"
          width={300}
          height={16}
        />
      </Box></>
  )
}
