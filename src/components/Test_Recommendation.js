import React from 'react'
import {Box,Text,Button} from "@chakra-ui/react"
const Test_Recommendation = () => {
  return (
    <Box w={"90%"} margin={"10px auto"} textAlign={"center"} padding={"50px"}>
      <Text fontSize={"md"} mb={"10px"}>We take privacy seriously</Text>
      <Text fontSize={"lg"} fontWeight={"bold"} mb={"10px"}>Before you get started</Text>       
      <Text fontSize={"md"}  mb={"10px"}>"We won't share your answers with anyone(and won't ever tell</Text>  
      <Text fontSize={"md"}  mb={"10px"}>you which friends said what about you)"</Text>  
      <Text fontSize={"md"}  mb={"10px"}>with love, Team AHEAD</Text>  
      <Button borderRadius={"15px"} data-aos="zoom-in" mb={"10px"} data-aos-duration="1000" data-aos-delay="200" p={"20px"} bg={"black"} color={"white"}>Start a Test</Button>
      <Text fontSize={"sm"}  mb={"10px"}>Take only 5 minutes</Text>  
    </Box>
  )
}

export default Test_Recommendation