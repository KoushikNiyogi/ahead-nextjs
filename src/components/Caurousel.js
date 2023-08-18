import { Box, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const Carousel = () => {
    const [isGhostOnLeft, setIsGhostOnLeft] = useState(false);

    const handleScroll = () => {
        // Calculate the scroll position and set isGhostOnLeft accordingly
        const scrollPosition = window.scrollY;
        console.log(scrollPosition);
        setIsGhostOnLeft(scrollPosition > 200); // Adjust the threshold as needed
    };

    // Attach the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box w="100%" m="20px auto">
            <Flex w={"90%"} margin={"auto"}>
                <motion.div
                    initial={{ opacity: 0, x: -800 }}
                    animate={{ opacity: 1, x: isGhostOnLeft ? 0 : -800 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Text fontSize={['xl', '4xl']} color={['gray.600', 'black']}>
                        Does this sound familiar . . .
                    </Text>
                </motion.div>

                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <motion.i
                        initial={{ opacity: 0, x: 1000 }}
                        animate={{ opacity: 1, x: isGhostOnLeft ? -10 : 1000, rotate: isGhostOnLeft ? -45 : 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="fa-solid fa-ghost"
                        style={{ fontSize: "30px", color: "purple", display: 'inline-block', transform: 'rotate(-45deg)' }}
                    ></motion.i>
                </Box>
            </Flex>


            <Flex width="100%"
                overflowX="hidden"
                position="relative"
                css={{
                    '& > div': {
                        whiteSpace: 'nowrap',
                        display: 'flex',
                        flexDirection: "column",
                        transition: 'transform 0.3s ease-in-out',
                        transform: `translateX(${isGhostOnLeft ? '-100%' : '0'})`, // Initial position based on isGhostOnLeft
                    },
                }}>
                
                
                <Box margin={"0 10px"} p={"25px 0px 10px 25px"} borderRadius={"10px"} bg={"#fff7e9"} >
                    <i class="fa-solid fa-face-frown" style={{ fontSize: "26px", color: "gold", bg: "white" }}></i>
                    <Text margin={"10px  0"} fontSize={"md"} fontWeight={"bold"}>You are at a lively dinner party</Text>
                    <Text fontSize={"md"} >You play on your phone, instead </Text>
                    <Text fontSize={"md"} >of confidently approaching strangers  </Text>
                    <Text fontSize={"md"} >and striking up a chat</Text>
                </Box>
                <Box margin={"0 10px"} p={"25px 0px 10px 25px"} borderRadius={"10px"} bg={"#d8f2ff"}>
                    <i class="fa-solid fa-face-grin-tears" style={{ fontSize: "26px", color: "gold", bg: "white" }}></i>
                    <Text margin={"10px  0"} fontSize={"md"} fontWeight={"bold"}>You hit dead end in negotiation</Text>
                    <Text fontSize={"md"} >You get nervous, frazzled and frustrated.</Text>
                    <Text fontSize={"md"} >instead of staying optimistic and</Text>
                    <Text fontSize={"md"} >solution oriented.</Text>
                </Box>
                <Box margin={"0 10px"} p={"25px 0px 10px 25px"} borderRadius={"10px"} bg={"#eeebfe"} >
                    <i class="fa-solid fa-face-angry" style={{ fontSize: "26px", color: "gold", bg: "white" }}></i>
                    <Text margin={"10px  0"} fontSize={"md"} fontWeight={"bold"}>You argue with a colleague</Text>
                    <Text fontSize={"md"} >You get angry and defensive, instead of</Text>
                    <Text fontSize={"md"} >staying and working towards</Text>
                    <Text fontSize={"md"} >comman ground</Text>
                </Box>
                <Box margin={"0 30px"} p={"25px 0px 10px 25px"} borderRadius={"10px"} bg={"blue.300"} color={"white"} transform={"roatate(-4deg)"} >
                    <i class="fa-solid fa-face-flushed" style={{ fontSize: "26px", color: "gold", bg: "white" }}></i>
                    <Text margin={"10px  0"} fontSize={"md"} fontWeight={"bold"}>You get a promotion at work</Text>
                    <Text fontSize={"md"} >You question yourself and wonder when</Text>
                    <Text fontSize={"md"} >they'll realize you're an unqualified</Text>
                    <Text fontSize={"md"} >imposter, instead of trusting yourself &</Text>
                    <Text fontSize={"md"} >your abilities</Text>
                </Box>
                <Box margin={"0 30px"} p={"25px 0px 10px 25px"} borderRadius={"10px"} bg={"#ffefd5"} >
                    <i class="fa-solid fa-face-grin-wink" style={{ fontSize: "26px", color: "gold", bg: "white" }}></i> 
                    <Text margin={"10px  0"} fontSize={"md"} fontWeight={"bold"}>You get a promotion at work</Text>
                    <Text fontSize={"md"} >You attend class reunion</Text>
                    <Text fontSize={"md"} >You compare yourself with your peers'</Text>
                    <Text fontSize={"md"} >achievements, instead of making your</Text>
                    <Text fontSize={"md"} >self-judgement more independent of others.</Text>
                </Box>

            </Flex>
        </Box>

    );
};

export default Carousel;
