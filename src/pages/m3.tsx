import { Box, Stack, Flex, LinkBox } from "@chakra-ui/react"
import ImageCarousel from '../components/ImageCarousel'
import Displacement from '../components/Displacement'
import DisplayInformation from '../components/DisplayInformation'

export default function m3() {
  return (
    <Box align="center" >
      <Displacement displacement="957" />
      <DisplayInformation
        displacementInfo="957 cc"
        horsePowerInfo="73 hp (80 kW)"
        dryWeightInfo="175 Kg (386 lb)"
        safetyInfo="ABS"
        seatHeightInfo="805 mm (31.69 in)"
        torqueInfo="67 Nm (49.0 lb-ft)"
      />
      <ImageCarousel image="M3.png" pathAfter="" pathBefore="m2" />
    </Box >

  )
}
