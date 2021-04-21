import { Box } from "@chakra-ui/react"
import ImageCarousel from '../components/ImageCarousel'
import Displacement from '../components/Displacement'
import DisplayInformation from '../components/DisplayInformation'

export default function m2() {
  return (
    <Box align="center">
      <Displacement displacement="821" />
      <DisplayInformation
        displacementInfo="821 cc"
        horsePowerInfo="109 hp (80 kW)"
        dryWeightInfo="180.5 Kg (398 lb)"
        safetyInfo="ABS"
        seatHeightInfo="805 mm (31.69 in)"
        torqueInfo="86 Nm (63.0 lb-ft)"
      />
      <ImageCarousel image="M2.webp" pathAfter="m3" pathBefore="" />
    </Box >
  )
}
