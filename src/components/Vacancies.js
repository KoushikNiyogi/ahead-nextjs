// Import required dependencies
import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import VacancyCard from './VacancyCard'; // Importing the VacancyCard component

// Sample data for open vacancies
const data = [
    {
        title: "Senior Full-Stack Engineer",
        jd: ["Full-time position", "Berlin or remote", "$65-85k, 0.5-1.50% equity share options"]
    },
    {
        title: "Senior Designer",
        jd: ["Full-time position", "Berlin or remote", "$65-85k, 0.5-1.50% equity share options"]
    },
    {
        title: "Superstar Intern",
        jd: ["Full-time position", "Berlin or remote", "$65-85k, 0.5-1.50% equity share options"]
    }
];

// Define the Vacancies component
const Vacancies = () => {
    const [isGhostOnLeft, setIsGhostOnLeft] = useState(false);

    // Function to handle scroll events
    const handleScroll = () => {
        // Calculate the scroll position and set isGhostOnLeft accordingly
        const scrollPosition = window.scrollY;
        console.log(scrollPosition);
        setIsGhostOnLeft(scrollPosition > 1300); // Adjust the threshold as needed
    };

    // Attach the scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            // Remove the scroll event listener when the component unmounts
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // Render the Vacancies component
    return (
        <Box w="90%" margin="30px auto">
            {/* Heading for open vacancies */}
            <motion.div
                    initial={{ opacity: 0, x: -800 }}
                    animate={{ opacity: 1, x: isGhostOnLeft ? 0 : -800 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    >
            <Text m={"30px 0"} fontSize={"4xl"} fontWeight={"bold"}>Open Vacancies</Text>
            </motion.div>

            {/* Flex container for vacancy cards */}
            <Flex justify="space-evenly">
                {data.map((el, index) => {
                    // Render each VacancyCard component using the data
                    return <VacancyCard key={index} el={el} />;
                })}
            </Flex>
        </Box>
    );
};

// Export the Vacancies component as the default export
export default Vacancies;
