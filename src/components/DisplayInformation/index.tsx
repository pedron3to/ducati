import { Flex, Stack, Box } from '@chakra-ui/react'
import BikeInformation from '../BikeInformation'
import Button from '../Button'
import Link from 'next/link'

interface DisplayInformationProps {
  displacementInfo: string;
  horsePowerInfo: string;
  torqueInfo: string;
  dryWeightInfo: string;
  seatHeightInfo: string;
  safetyInfo: string;

}

export default function DisplayInformation({
  displacementInfo,
  horsePowerInfo,
  torqueInfo,
  dryWeightInfo,
  safetyInfo,
  seatHeightInfo,

}: DisplayInformationProps) {
  return (
    <Flex
      align={["flex-star", "flex - end"]}
      justifyContent="space-between"
      maxW={1180}
      flexDirection={["column", "column", "row", "row"]}
      borderRadius={[16, 32, 48]}
      bg="white"
      mt={[20, 44]}
      mx={4}
      py={8}
      px={[8]}
    >
      <Stack spacing={1} align="flex-start" left={[1, 2]} >
        <BikeInformation title="Displacement" information={displacementInfo} />
        <BikeInformation title="Horse Power" information={horsePowerInfo} />
        <BikeInformation title="Torque" information={torqueInfo} />
        <BikeInformation title="DryWeight" information={dryWeightInfo} />
        <BikeInformation title="Seat Height" information={seatHeightInfo} />
        <BikeInformation title="Safety" information={safetyInfo} />
      </Stack>

      <Stack spacing={12} direction="row" align="center" alignItems="flex-end" pb={8}>
        <Link href="/" passHref>
          <a>
            <Button color="red.500" />
          </a>
        </Link>
        <Link href="/m2" passHref>
          <a>
            <Button color="black.900" />
          </a>
        </Link>
        <Link href={"/m3"} passHref>
          <a>
            <Button color="gray.500" />
          </a>
        </Link>
      </Stack>
      <Box w={64}>
        <Box textStyle="h4" letterSpacing={3} fontFamily='Italianno' align="left">Fresh vibes. </Box>
        <Box textStyle="h4" letterSpacing={3} fontFamily='Italianno'>Sporty soul.</Box>
      </Box>

    </Flex >
  )
}
