import { motion } from "framer-motion"
import { Box as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react"

interface ButtonProps extends ChakraButtonProps {
  color: string;
}

export default function Button({ color }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ ease: "easeOut", duration: .2 }}
    >
      <ChakraButton
        as="button"
        boxShadow="dark-lg"
        height={16}
        border="none"
        _hover={{ filter: "brightness(0.9)" }}
        width={16}
        borderRadius={[12, 16]}
        bgColor={color}
      />

    </motion.button>
  )
}
