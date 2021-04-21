import { Flex, Stack, Box } from '@chakra-ui/react'
import MotorcycleInformation from '../MotorcycleInformation'
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
      mt={[20, 40]}
      mx={4}
      py={8}
      px={[8]}
    >
      <Stack spacing={1} align="flex-start" left={[1, 2]} >
        <MotorcycleInformation title="Displacement" information={displacementInfo} />
        <MotorcycleInformation title="Horse Power" information={horsePowerInfo} />
        <MotorcycleInformation title="Torque" information={torqueInfo} />
        <MotorcycleInformation title="DryWeight" information={dryWeightInfo} />
        <MotorcycleInformation title="Seat Height" information={seatHeightInfo} />
        <MotorcycleInformation title="Safety" information={safetyInfo} />
      </Stack>

      <Stack spacing={["auto", 12]} direction="row" align="center" alignItems="flex-end"  my={[2,0]}>
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
      <Flex  mt={[0,48]} flexDirection={ ["row","column"]} justify="space-between" >
        <Box textStyle="h4" letterSpacing={3} fontFamily='Italianno' align="left">Fresh vibes. </Box>
        <Box textStyle="h4" letterSpacing={3} fontFamily='Italianno' align="right">Sporty soul.</Box>
      </Flex>

    </Flex >
  )
}
