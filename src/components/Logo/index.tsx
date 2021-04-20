import { Box } from "@chakra-ui/react"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <>

      < Box p={[2, 4]} h={97}>
        <Image
          src="/ducati_id 1.png"
          alt="Ducati Logo"
          width={90}
          height={97}
          //loading="eager"
          layout="intrinsic"
          priority

        />
      </Box>
      <Box p={[2, 8]}>
        <Image
          src="/monster.svg"
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
