import { Box } from "@chakra-ui/react"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <>

      < Box pt={[3, 4, 4, 4]} w={[10, 50, 70, 90]} >
        <Image
          src="/logo.webp"
          alt="Ducati Logo"
          width={90}
          height={97}
          loading="eager"
          layout="responsive"
          priority

        />
      </Box>
      <Box pt={[2, 4, 6, 8]} w={[28, 150, 200, 300]}>
        <Image
          src="/monster.webp"
          alt="Monster Logo"
          width={300}
          height={16}
          layout="responsive"
          loading="eager"
          priority

        />
      </Box>

    </>
  )
}
