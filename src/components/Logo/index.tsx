import { Box } from "@chakra-ui/react"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <>

      < Box p={[2, 4]} h={97}>
        <Image
          src="/logo.webp"
          alt="Ducati Logo"
          width={90}
          height={97}
          //loading="eager"
          layout="intrinsic"
          priority

        />
      </Box>
      <Box pt={[2, 8]}>
        <Image
          src="/monster.webp"
          alt="Monster Logo"
          width={300}
          height={16}
          layout="intrinsic"
          //loading="eager"
          priority

        />
      </Box>

    </>
  )
}
