import React from 'react';
import { Box, Flex, Text } from "@chakra-ui/react";

// Define the Content_section component
const Content_section = () => {
    // Render the Content_section component
    return (
        <Box w={"90%"} m={"auto"} mt={"100px"}>
            {/* Flex container with space-between alignment and left-aligned text */}
            <Flex justify={"space-between"} textAlign={"left"}>
                <Box>
                    {/* Title */}
                    <Text fontSize={"2xl"} fontWeight={"bold"}>EQ beats IQ</Text>
                </Box>
                <Box>
                    {/* Content about Emotional Intelligence (EQ) */}
                    <Text fontSize={"md"}>People with high Emotional</Text>
                    <Text fontSize={"md"}>Intelligence (EQ) live more fulfilled</Text>
                    <Text fontSize={"md"}>lives. They tend to be happier</Text>
                    <Text fontSize={"md"}>and have healthy relationships.</Text>
                </Box>
                <Box>
                    {/* Additional content about EQ */}
                    <Text fontSize={"md"}>They are more successful in their</Text>
                    <Text fontSize={"md"}>pursuits and make for inspiring</Text>
                    <Text fontSize={"md"}>leaders. According to science, they</Text>
                    <Text fontSize={"md"}>earn $29k more per year</Text>
                </Box>
            </Flex>
        </Box>
    );
};

// Export the Content_section component as the default export
export default Content_section;
