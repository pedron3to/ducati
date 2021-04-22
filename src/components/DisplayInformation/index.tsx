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

      justifyContent={["center", "space-between"]}
      alignItems={["center", "center", "center", "flex-end"]}
      maxW={1180}
      flexDirection={["column", "column", "column", "row"]}
      borderRadius={[16, 32, 48]}
      bg="white"
      mt={["74px", "120px", "210px", "200px"]}
      mx={[10, 14, 24, 4]}
      pt={[5, 8]}
      pb={[2, 8]}
      px={[5, 8]}
    >
      <Stack spacing={[0, 1]} align={["center", "center", "center", "flex-start"]} left={[0, 2]} >
        <MotorcycleInformation title="Displacement" information={displacementInfo} />
        <MotorcycleInformation title="Horse Power" information={horsePowerInfo} />
        <MotorcycleInformation title="Torque" information={torqueInfo} />
        <MotorcycleInformation title="DryWeight" information={dryWeightInfo} />
        <MotorcycleInformation title="Seat Height" information={seatHeightInfo} />
        <MotorcycleInformation title="Safety" information={safetyInfo} />
      </Stack>

      <Stack spacing={[4, 8, 10, 12]} direction="row" align="center" alignItems="flex-end" my={[2, 2, 2, 0]}>
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
      <Flex mt={[0, 2, 4, 48]} flexDirection={["row", "row", "row", "column"]} justify="space-between" >
        <Box textStyle="h4" letterSpacing={3} fontFamily='Italianno' align="left">Fresh vibes. </Box>
        <Box textStyle="h4" letterSpacing={3} fontFamily='Italianno' align="right">Sporty soul.</Box>
      </Flex>

    </Flex >
  )
}
