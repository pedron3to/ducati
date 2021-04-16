import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  textStyles: {
    h1: {
      fontSize: "180px",
      fontWeight: "bold",
      lineHeight: "121%",
      letterSpacing: "32%",
    },
    h2: {
      fontSize: "20px",
      fontWeight: "bold",
      lineHeight: "121%",
      letterSpacing: "32%",
    },
    h3: {
      fontSize: "16px",
      fontWeight: "light",

    },
    h4: {
      fontSize: "50px",
      fontWeight: "regular",
      fontFamily: "Italianno",
    },
  },

  colors: {
    white: {
      "50": "#fff"
    },
    gray: {
      "500": "#e4e4e4"
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


