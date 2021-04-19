import { Box, Stack, Flex, LinkBox } from "@chakra-ui/react"
import { motion } from "framer-motion"
import BikeInformation from '../components/BikeInformation'
import Button from '../components/Button'
import Logo from '../components/Logo'
import Image from 'next/image'
import Link from 'next/link'
import motorcycle from '../services/data'


export default function m3() {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: -300,
      scale: 1.2,
      backgroundColor: 'white',
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "easeOut",
    duration: 0.5,
    backgroundColor: 'white',
  };

  return (
    <Box
      align="center"
      h="100vh"
    >
      <Logo />
      <motion.div
      /* "initial="initial"
      animate="in"
      exit="out */
      initial={{ x: '100vh', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100vh', opacity: 0 }}
      variants={pageVariants}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.7
      }}
    >
      <Box textStyle="h1" color="white" fontSize={[70, 80, 180]}>957</Box>
      </motion.div>
      <Flex
        align="flex-end"
        justifyContent="space-between"
        maxW={1180}
        borderRadius={[24, 32, 48]}
        bg="white"
        mt={44}
        mx={4}
        py={8}
        px={8}
      >
        <Stack spacing={1} align="flex-start" >
          <BikeInformation title="Displacement" information='957 cc' />
          <BikeInformation title="Horse Power" information='73 hp (54 kW)' />
          <BikeInformation title="Torque" information='67 Nm (49.0 lb-ft)' />
          <BikeInformation title="Dry Weight" information="175 Kg (386 lb)" />
          <BikeInformation title="Seat Height" information="805 mm (31.69 in)" />
          <BikeInformation title="Safety" information="ABS" />

          {
  },
        </Stack>

        <Stack spacing={12} direction="row" align="center" alignItems="flex-end" pb={8}>
        <Link href="/">
         <a>
          <Button color="red.500" />
         </a>

        </Link>
        <Link href="/m2">
         <a>
          <Button color="black.900" />
         </a>
        </Link>
        <Link href="/m3">
         <a>
            <Button color="gray.500" />
         </a>
        </Link>
        </Stack>
        <Box w={64}>
          <Box textStyle="h4" letterSpacing={3} fontFamily='Italianno' align="left">Fresh vibes. </Box>
          <Box textStyle="h4" letterSpacing={3} fontFamily='Italianno'>Sporty soul.</Box>
        </Box>

      </Flex>
      <Flex
        position="relative"
        top={-760}
        justify='center'
        align="center"
        mx={8}
      >
        <motion.div
          whileHover={{ x: -15 }}
          transition={{ ease: "easeOut", duration: .2 }}
        >
          <Link href="/m2">
            <a>
              <Image
                src="/arrow-left.svg"
                alt="Monster Logo"
                width={70}
                height={70}
              />
            </a>
          </Link>

        </motion.div>

        <motion.div
      /* initial="initial"
      animate="in"
      exit="out" */
      initial={{ x: '100vh', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100vh', opacity: 0 }}
      variants={pageVariants}
      transition={pageTransition}
    >
        <Image
          src="/M3.png"
          alt="Motorcycle 1"
          width={888}
          height={550}
        />
        </motion.div>
        <motion.div
          whileHover={{ x: 15 }}
          transition={{ ease: "easeOut", duration: .2 }}
        >
          <Link href="/">
            <a>
              <Image
                src="/arrow-right.svg"
                alt="Monster Logo"
                width={70}
                height={70}
              />

            </a>
          </Link>
        </motion.div>
      </Flex>
    </Box >

  )
}
