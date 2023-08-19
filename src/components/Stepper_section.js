import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import Stepper1 from './Stepper1'
import Stepper_section2 from './Stepper2'

const Stepper_section = () => {
  return (
    <Box  textAlign={"center"} borderRadius={"10px"} w="90%" margin="60px auto" padding={"100px 0"} bg={"#edf8fe"}>
        <Text mb={"5px"} fontSize={"lg"} fontWeight={"bold"}>Let your friends, and co-workers (anonymously) rate your social skills.</Text>
        <Text mb={"20px"} fontSize={"4xl"} fontWeight={"bold"}>Ever wondered what others think of you</Text>
        <Stepper1 />
        <Stepper_section2/>
    </Box>
  )
}

export default Stepper_section