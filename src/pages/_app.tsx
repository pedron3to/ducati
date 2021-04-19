import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../styles/theme"
import mirageServer from '../services/mirage'
import { motion, AnimatePresence } from "framer-motion"


if (process.env.NODE_ENV === 'development') {
  mirageServer();
}

function MyApp({ Component, pageProps }: AppProps, router) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence>
      <motion.div key={router.router} initial="pageInitial" animate="pageAnimate" exit='pageExit' variants={{
        pageInitial: {
          opacity:0
        },

        pageAnimate:{
          opacity: 1
        },

        pageExit: {
          backgroundColor: 'white',
          opacity: 0

        },
      }}>
        <Component {...pageProps} />
      </motion.div>
      </AnimatePresence>

    </ChakraProvider>
  )
}

export default MyApp
