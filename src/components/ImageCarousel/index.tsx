import React from 'react';
import { motion } from 'framer-motion'
import { Flex, Box } from "@chakra-ui/react"
import Link from 'next/link'
import Image from 'next/image'

const pageVariants = {
  initial: {
    opacity: 0,
    x: 100,
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: -100,
    scale: 1.2
  }
};

const pageTransition = {
  type: "tween",
  ease: "easeOut",
  duration: .5
};

interface ImageCarouselProps {
  image: string;
  pathBefore: string;
  pathAfter: string;
}







export default function ImageCarousel({
  image, pathBefore, pathAfter }: ImageCarouselProps) {
  return (
    <Flex
      position="absolute"
      justify='center'
      align="center"
      top={["60px",150]}
      ml="auto"
      mr="auto"
      left={[4,0]}
      right={[4,0]}

    >
      <motion.div
        whileHover={{ x: -15 }}
        transition={{ ease: "easeOut", duration: .2 }}
      >
        <Link href={`/${pathBefore}`} passHref>
        <Box width={[6,70]}>
          <a>

            <Image
              src="/arrow-left.svg"
              alt="arrow Left"
              width={70}
              height={70}
              loading="eager"
              layout="responsive"

            />
          </a>
            </Box>
        </Link>
      </motion.div>

      <motion.div
        initial={{ x: "100vh", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100vh", opacity: 0, }}
        variants={pageVariants}
        transition={pageTransition}

      > <Box  width={[240,800]}>
        <Image
          src={`/${image}`}
          alt={`motorcycle ${image}`}
          width={800}
          height={631}
          loading="eager"
          priority
        />
        </Box>
      </motion.div>



      <motion.div
        whileHover={{ x: 15 }}
        transition={{ ease: "easeOut", duration: .2 }}
      >
        <Link href={`/${pathAfter}`} passHref >
          <Box width={[6,70]}>
          <a>

            <Image
              src="/arrow-right.svg"
              alt="arrow Right"
              width={70}
              height={70}
              loading="eager"
              layout="responsive"


            />

          </a>
          </Box>
        </Link>
      </motion.div>

    </Flex>
  )
}



