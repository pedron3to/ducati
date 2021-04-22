import { Box } from "@chakra-ui/react"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <>

      < Box p={[3, 4]} w={[14,90]} mt={[2,0]}>
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
      <Box pt={[, 8]} w={[28,300]}>
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
