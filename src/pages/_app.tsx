import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../styles/theme"
import mirageServer from '../services/mirage'


if (process.env.NODE_ENV === 'development') {
  mirageServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </ChakraProvider>
  )
}

export default MyApp
