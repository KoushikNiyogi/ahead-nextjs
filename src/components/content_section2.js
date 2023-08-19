import React from 'react'
import {Box, Flex,Text} from "@chakra-ui/react"
const Content_section2 = () => {
  return (
    <Box w={"90%"} m={"auto"} mt={"100px"} >
        <Flex justify={"space-between"} textAlign={"left"}>
            <Box>
             <Text fontSize={"2xl"} fontWeight={"bold"}>Be the best you</Text>
             <Text fontSize={"2xl"} fontWeight={"bold"}>with EQ</Text>
            </Box>
            <Box>
             <Text fontSize={"md"} >Not having your own emotions</Text>
             <Text fontSize={"md"} >under control might be holding</Text>
             <Text fontSize={"md"} >you back</Text>
            </Box>
            <Box>
             <Text fontSize={"md"} >Additionally, not undestanding</Text>
             <Text fontSize={"md"} >those of others stops you from</Text>
             <Text fontSize={"md"} >being paren, friend you can be.</Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default Content_section2