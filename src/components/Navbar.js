import { Box, Flex, Spacer, IconButton, Text, Button } from '@chakra-ui/react';


const Navbar = () => {

    
    return (
        <Box
            
            as="nav"
            bg="white"
            color="black"
            p={4}
            position="fixed"
            top={0}
            width="100%"
            zIndex="999"
        >
            <Flex w={"90%"} m={"auto"} align="center" justify={"space-between"}>
                <Box>
                    <IconButton
                        icon={<Text margin={"5px"} color={"#5331de"} fontSize={"20px"}>ahead</Text>}
                        size="xl"
                        aria-label="Menu"
                        fontSize="60px"
                        bg={"white"}
                        mr={4}
                        _focus={{ outline: 'none' }}
                    />
                </Box>
                <Flex w={"40%"} justify={"space-between"}>
                    <Box>Emotions</Box><Box>Manifesto</Box><Box>Self-awareness Test</Box><Box>Work With Us</Box>
                </Flex>
                <Box>
                    <Button p={"10px"} bg={"black"} color={"white"} borderRadius={"10px"} >Download App</Button>
                </Box>
            </Flex>
        </Box>
    );
};

export default Navbar;
