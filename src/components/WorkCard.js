import { Box,Text } from '@chakra-ui/react'
import React from 'react'

const WorkCard = ({el}) => {
  return (
    <Box mr={"10px"} maxWidth={"300px"} mb={"25px"} bg ={"white"} padding={"20px"} borderRadius={"10px"}>
      <Text fontSize="sm" fontWeight={"bold"} mb={"20px"}>{el.title}</Text>
      <Text fontSize="sm" mb={"20px"}>{el.content}</Text>
    </Box>
  )
}

export default WorkCard