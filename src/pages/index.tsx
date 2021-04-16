import { Box, Stack, Flex  } from "@chakra-ui/react"
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <Box
      align="center"
      h="100vh"
    >
      <Box p={4}>
        <Image
          src="/logo.svg"
          alt="Ducati Logo"
          width={90}
          height={97}
        />
      </Box>
      <Box >
        <Image
          src="/monster.svg"
          alt="Monster Logo"
          width={300}
          height={16}
        />
      </Box>

      <Box textStyle="h1" color="white">797</Box>
      <Flex
        mt={16}
        align="center"
        justify="space-between"
        maxW={1000}

      >
        <Link href="#">
          <Image
            src="/arrow-left.svg"
            alt="Monster Logo"
            width={70}
            height={70}
          />
        </Link>
        <Link href="#">
          <Image
            src="/arrow-right.svg"
            alt="Monster Logo"
            width={70}
            height={70}
          />
        </Link>

      </Flex>
      <Box
        align="center"
        maxW={1180}
        borderRadius={50}
        bg="white"
        mt="32px"
      >
        <Box
          align="left"
          py="32px"
          px="64px"
        >
          <Stack spacing={1}>
            <Box>
              <Box textStyle="h3" >Displacement</Box>
              <Box textStyle="h2" letterSpacing={4}>73 hp (54 kW)</Box>
            </Box>
            <Box>
              <Box textStyle="h3" >Horse Power</Box>
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
        top={-730}
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
