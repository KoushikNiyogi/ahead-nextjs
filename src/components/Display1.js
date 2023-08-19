import { Box, Flex, Text ,Image } from '@chakra-ui/react'
import React from 'react'
const stars = new Array(5).fill(0)
import image from "../Photo/mobile.jpg"

const Display1 = () => {
    return (
        <Box bg={"#eeebfe"} borderRadius={"10px"} w={"90%"} m={"100px auto"} padding={"40px 50px"}>
            <Flex justify={"space-around"} alignItems={"center"}>
                <Box>
                    <Text fontSize={"md"} fontWeight={"bold"}>Ahead App</Text>
                    <Text fontSize={"4xl"} fontWeight={"bold"}>Master your life <br /> by mastering<br />emotions</Text>
                    <Flex>
                        {
                            stars.map((el) => {
                                return <i class="fa-solid fa-star" style={{ fontSize: "10px", color: "gold" }}></i>
                            })
                        }
                    </Flex>
                    <Text fontSize={"md"}>100+ AppStore Reviews</Text>
                </Box>
                <Flex w={"300px"} h={"300px"} border="3px dashed white" borderRadius="50%" justifyContent={"center"} alignItems={"center"}>
                    <Flex alignitems="center" justify= "center" w="200px" h="200px" border="1px solid" bg={"#ddd6f8"} borderRadius={"50%"}>
                        <Image
                            boxSize='190px'
                            objectFit='contain'
                            src={"https://i.imgur.com/8FpKlnH.png"}
                            alt='Dan Abramov'
                            borderRadius="half"
                            zIndex={1}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Display1