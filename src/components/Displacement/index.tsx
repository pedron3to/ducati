import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'

interface DisplacementProps {
  displacement: string;
}
export default function Displacement({ displacement }: DisplacementProps) {
  return (
    <motion.div

      initial={{ x: '100vh', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100vh', opacity: 0 }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.7
      }}
    >
      <Box textStyle="h1" color="white" fontSize={[70, 80, 180]}>{displacement}</Box>
    </motion.div>
  )
}




