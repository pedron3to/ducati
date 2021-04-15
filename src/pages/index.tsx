import { Box, Text, Stack } from "@chakra-ui/react"
import Image from 'next/image'


export default function Home() {
  return (
    <Box
      align="center"
      mt={61}
      h="100vh"
    >
      <Box>
        <Image
          src="/logo.svg"
          alt="Ducati Logo"
          width={110}
          height={117}
        />
      </Box>
      <Box mt={45}>
        <Image
          src="/monster.svg"
          alt="Monster Logo"
          width={322}
          height={20}
        />
      </Box>
      <Box textStyle="h1" color="white">797</Box>
      <Box
        align="center"
        maxW={1440}

        mx={8}
        pb={8}
        borderRadius={50}
        bg="white">
        <Box
          align="left"
          ml="80px"
          my="44px"
        >
          <Stack spacing={3}>
            <Box textStyle="h3" mt="44px" le>Displacement</Box>
            <Box>

              <Box textStyle="h3" mt={12}>Horse Power</Box>
              <Box textStyle="h2" letterSpacing={4}>73 hp (54 kW)</Box>
            </Box>
            <Box>
              <Box textStyle="h3">Torque</Box>
              <Box textStyle="h2" letterSpacing={4}>67 Nm (49.0 lb-ft)</Box>
            </Box>
            <Box>
              <Box textStyle="h3">Dry Weight</Box>
              <Box textStyle="h2" letterSpacing={4}>175 Kg (386 lb)</Box>
            </Box>
            <Box>
              <Box textStyle="h3">Seat Height</Box>
              <Box textStyle="h2" letterSpacing={4}>805 mm (31.69 in)</Box>
            </Box>
            <Box  >
              <Box textStyle="h3">Safety</Box>
              <Box textStyle="h2" letterSpacing={4}>ABS</Box>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box
        position="relative"
        top={-775}
      >
        <Image
          src="/M1.png"
          alt="Motorcycle 1"
          width={900}
          height={550}
        />
      </Box>
    </Box>

  )
}
