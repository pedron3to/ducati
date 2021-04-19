import { Box } from "@chakra-ui/react"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.2
      }}
    >
      <Box p={4} >
        <Image
          src="/ducati_id 1.png"
          alt="Ducati Logo"
          width={90}
          height={97}
          loading="eager"


        />
      </Box>
      <Box >
        <Image
          src="/monster.svg"
          alt="Monster Logo"
          width={300}
          height={16}
          loading="eager"

        />
      </Box>
    </motion.div>
  )
}
