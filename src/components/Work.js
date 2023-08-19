import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import styles from "../styles/work.module.css"
import WorkCard from './WorkCard';
import '@fortawesome/fontawesome-free/css/all.css';


const data = [
    {
        title: "Power through, even when the going gets tough",
        content: "We help you spot and work around whatever stands in the  way, be it bad habits, etc."
    },
    {
        title: "Learn more about who you are and where you want to go",
        content: "We ask right questions to help you better understand why you do things the way you do"
    },
    {
        title: "Play and grow together with others on the same journey",
        content: "Ahead family feels like a game, not like a chore.See yourself grow every day towards achieving your gaols!."
    },
    {
        title: "Master how to make it happen in real life",
        content: "We support you towards ninja-level skills with sleek tools such as dry-runs, quizes,and flashcards"
    },
    {
        title: "Learn about practical skills that you can actually use in real life",
        content: "We teach you smart psychological techniques and habit -forming strategies that are easy to apply"
    },
    {
        title: "Get support that's made for your needs",
        content: "We build your personal roadmap of lessons and actions towards your goal"
    }
]


const Work = () => {
    // State to track whether the ghost element is on the left side
    const [isGhostOnLeft, setIsGhostOnLeft] = useState(false);
    const [rotation, setRotation] = useState(0);

    // Function to handle scroll events
    const handleScroll = () => {
        // Calculate the scroll position and set isGhostOnLeft accordingly
        const scrollPosition = window.scrollY;
        setIsGhostOnLeft(scrollPosition > 3200); // Adjust the threshold as needed
        if (scrollY > 1300) {
            const step = Math.floor((scrollY - 1300) / 360);
            const remainder = (scrollY - 1300) % 360;
            if (remainder >= 0 && remainder < 15) {
              setRotation(15);
            } else if (remainder >= 15 && remainder < 180) {
              setRotation(-30);
            } else if (remainder >= 180 && remainder < 195) {
              setRotation(15);
            } else {
              setRotation(0);
            }
          } else {
            setRotation(0);
          }
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
        <Box w={"90%"} margin="auto" bg={"#f3f1ff"} p={"50px 30px"} borderRadius={"15px"}>
            <Flex justify="space-between">
                <motion.div
                    initial={{ opacity: 0, x: -800 }}
                    animate={{ opacity: 1, x: isGhostOnLeft ? 0 : -800 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Text fontSize={['xl', '4xl']} color={['gray.600', 'black']} fontWeight={"bold"}>
                        Work With Us
                    </Text>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 800 }}
                    animate={{ opacity: 1, x: isGhostOnLeft ? 0 : 800 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Text fontSize={['xl', '4xl']} color="blue.400" fontWeight={"bold"}>
                        ahead
                    </Text>
                </motion.div>
            </Flex>
            <Flex m={"40px 0"} justify="space-between">
                <Box bg={"white"} borderRadius={"15px"}>
                    <i className="fa-solid fa-ghost" style={{
                        fontSize: "50px", color: "#c5c5c6", padding: "10px 20px" ,transform: `rotate(${rotation}deg)`,
                        transition: "transform 0.5s ease",
                    }}></i>
                    <Box padding={"10px 20px"}>
                        <Text fontSize={"lg"} fontWeight={"bold"}>about</Text>
                        <Text fontSize={"md"} >At ahead our goal is to make self-</Text>
                        <Text fontSize={"md"} >improvement fun and lasting. We know there's</Text>
                        <Text fontSize={"md"} >a way to make it work.And that's<br /> what ahead is about</Text>
                    </Box>
                    <Box padding={"10px 20px"} bg={""}>
                        <Text fontSize={"lg"} fontWeight={"bold"}>Product</Text>
                        <Text fontSize={"md"} >Sure, you could spend ages reading books or </Text>
                        <Text fontSize={"md"} >sitting in seminars on how to become a better</Text>
                        <Text fontSize={"md"} >spouse, parent, or manager - like we did ...</Text>
                    </Box>
                </Box>
                <Box className={styles.parent} maxHeight="500px" overflowY="scroll">{
                    data.map((el) => {
                        return <WorkCard el={el} />
                    })
                }
                </Box>
            </Flex>
        </Box>
    )
}

export default Work