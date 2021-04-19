import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { Flex } from "@chakra-ui/react"
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
      top={200}
      ml="auto"
      mr="auto"
      left={0}
      right={0}

    >
      <motion.div
        whileHover={{ x: -15 }}
        transition={{ ease: "easeOut", duration: .2 }}
      >
        <Link href={pathBefore} passHref>
          <a>
            <Image
              src="/arrow-left.svg"
              alt="arrow Left"
              width={70}
              height={70}
            />
          </a>
        </Link>
      </motion.div>

      <motion.div
        initial={{ x: "100vh", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100vh", opacity: 0, }}
        variants={pageVariants}
        transition={pageTransition}
      >
        <Image
          src={`/${image}`}
          alt={`motorcycle ${image}`}
          width={888}
          height={550}
          loading="eager"
        />
      </motion.div>



      <motion.div
        whileHover={{ x: 15 }}
        transition={{ ease: "easeOut", duration: .2 }}
      >
        <Link href={`/${pathAfter}`} passHref>
          <a>
            <Image
              src="/arrow-right.svg"
              alt="arrow Right"
              width={70}
              height={70}

            />
          </a>
        </Link>
      </motion.div>

    </Flex>
  )
}


