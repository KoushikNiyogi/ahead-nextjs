import { Box, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const Display2 = () => {
    // State to track whether the ghost element is on the left side
    const [isGhostOnLeft, setIsGhostOnLeft] = useState(false);

    // Function to handle scroll events
    const handleScroll = () => {
        // Calculate the scroll position and set isGhostOnLeft accordingly
        const scrollPosition = window.scrollY;
        setIsGhostOnLeft(scrollPosition > 1000); // Adjust the threshold as needed
    };

    // Attach the scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            // Remove the scroll event listener when the component unmounts
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Box bg={"#fef7f1"} w="90%" margin="40px auto" p={"40px"}>
            <Box>
                <motion.div
                    initial={{ opacity: 0, x: -800 }}
                    animate={{ opacity: 1, x: isGhostOnLeft ? 0 : -800 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Text mt={"40px"} fontSize={"md"} color={['gray.600', 'black']}>
                        Built out of frustation
                    </Text>
                    <Text mt={"10px"} fontSize={'4xl'} color={['gray.600', 'black']}>
                        Meet the ahead app
                    </Text>
                </motion.div>
            </Box>
            <Flex w={"70%"} m={"30px auto"} justify={"space-between"}>
                <Flex alignItems={"center"} justify={"center"} w={"150px"} h="150px" bg={"white"} borderRadius={"50%"} outline={"20px solid #f6f6f5"}  >
                    <motion.i
                        initial={{ opacity: 0, x: -500 }}
                        animate={{ opacity: 1, x: isGhostOnLeft ? 0 : -500 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="fa-solid fa-ghost"
                        style={{ fontSize: "100px", color: "#dbc0f3", display: 'inline-block' }}
                    ></motion.i>
                </Flex>
                <Box  >
                    <Text fontSize={"md"} color={"grey"}>
                        A personalised pocket coach that provides bite- <br />sized, science-driven tools to boost emotional <br /> inttelligence.
                    </Text>
                    <Text mt={"10px"} fontSize={"md"} color={"grey"}>
                        Think of it as a pocket cheerleader towards a <br /> better, more fulfilling.
                    </Text>
                </Box>
            </Flex>

        </Box>
    )
}

export default Display2