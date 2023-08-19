import { Box, Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import Vertical_stepper from './Vertical_stepper';
import style from "../styles/work.module.css"

const VerticalSetter = () => {
    const [isGhostOnLeft, setIsGhostOnLeft] = useState(false);

    // Function to handle scroll events
    const handleScroll = () => {
        // Calculate the scroll position and set isGhostOnLeft accordingly
        const scrollPosition = window.scrollY;
        setIsGhostOnLeft(scrollPosition > 1200); // Adjust the threshold as needed
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
        <Box  w="90%" m="60px auto">
            <Box >
                <Text fontSize={"lg"} fontWeight={"bold"}>Wrong with sel-improvement & how we're fixing it.</Text>
                <Flex>
                    <motion.div
                        initial={{ opacity: 0, x: -800 }}
                        animate={{ opacity: 1, x: isGhostOnLeft ? 0 : -800 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Text fontSize={['xl', '4xl']} color={['gray.600', 'black']}>
                            Self-improvement. Ugh.
                        </Text>
                    </motion.div>

                    <Box style={{ display: 'flex', alignItems: 'center', marginLeft: "10px" }}>
                        {/* Animation for the ghost icon */}
                        <motion.i
                            initial={{ opacity: 0, x: 1000 }}
                            animate={{ opacity: 1, x: isGhostOnLeft ? -10 : 1000, rotate: isGhostOnLeft ? -45 : 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="fa-solid fa-ghost"
                            style={{ fontSize: "30px", color: "#b3e5fc", display: 'inline-block', transform: isGhostOnLeft ? 'rotate(-45deg)' : 'rotate(45deg)' }}
                        ></motion.i>
                    </Box>
                </Flex>
            </Box>
            <Box className={style.parent} width={"60%"} margin={"auto"} maxHeight={"300px"} overflowY={"scroll"}>
              <Vertical_stepper />
            </Box>
        </Box>
    )
}

export default VerticalSetter