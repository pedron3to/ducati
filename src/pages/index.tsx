import { Box } from "@chakra-ui/react"
import ImageCarousel from '../components/ImageCarousel'
import Displacement from '../components/Displacement'
import DisplayInformation from '../components/DisplayInformation'


export default function Home() {
  return (
    <Box align="center" >
      <Displacement displacement="797" />
      <DisplayInformation
        displacementInfo="797 cc"
        horsePowerInfo="73 hp (54 kW)"
        dryWeightInfo="175 Kg (386 lb)"
        safetyInfo="ABS"
        seatHeightInfo="805 mm (31.69 in)"
        torqueInfo="67 Nm (49.0 lb-ft)"
      />
      <ImageCarousel image="M1.webp" pathAfter="m2" pathBefore="m3" />
    </Box >

  )
}
