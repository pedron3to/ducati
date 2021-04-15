import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: "200px",
      fontWeight: "bold",

    },
    h2: {
      fontSize: "24px",
      fontWeight: "bold",
      lineHeight: "121%",
      letterSpacing: "32%",
    },
    h3: {
      fontSize: "12px",
      fontWeight: "light",
    },
  },

  colors: {
    white: {
      "50": "#fff"
    },
    red: {
      "500": "#DF1F26"
    },
    black: {
      "300": "#141414",
      "900": "#181818"
    },

  },
  fonts: {
    body: 'Lato',
    heading: 'Lato',
  },
  styles: {
    global: {
      body: {
        bg: "repeating-linear-gradient(-45deg, #212529 ,#212529 3px, #0B0B09 3px,#0B0B09 14px)",
        color: 'black.900'
      }
    }
  }
})


