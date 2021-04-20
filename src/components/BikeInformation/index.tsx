import { Box, BoxProps as ChakraBoxProps } from "@chakra-ui/react"
import { motion } from 'framer-motion'

interface BoxProps extends ChakraBoxProps {
  title: string;
  information: string;
}

export default function BikeInformation({ title, information }: BoxProps) {
  return (
    <>
      <Box textStyle="h3" >{title}</Box>
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
        <Box textStyle="h2" letterSpacing={[1, 3]}>{information}</Box>
      </motion.div>
    </>
  )
}
