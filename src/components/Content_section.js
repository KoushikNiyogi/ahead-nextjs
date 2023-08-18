import React from 'react'
import {Box, Flex,Text} from "@chakra-ui/react"
const Content_section = () => {
  return (
    <Box w={"90%"} m={"auto"} mt={"100px"} >
        <Flex justify={"space-between"} textAlign={"left"}>
            <Box>
             <Text fontSize={"2xl"} fontWeight={"bold"}>EQ beats IQ</Text>
            </Box>
            <Box>
             <Text fontSize={"md"} >People with high Emotional</Text>
             <Text fontSize={"md"} >Intelligence(EQ) live more fulfilled</Text>
             <Text fontSize={"md"} >lives.They tend to be more happier</Text>
             <Text fontSize={"md"} >have healthy retionships.</Text>
            </Box>
            <Box>
             <Text fontSize={"md"} >They are more successful in their</Text>
             <Text fontSize={"md"} >pursuits and make for inspiring</Text>
             <Text fontSize={"md"} >leaders. According to science, they</Text>
             <Text fontSize={"md"} >earn $29k a year</Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default Content_section