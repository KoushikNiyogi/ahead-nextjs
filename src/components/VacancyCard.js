// Import required dependencies
import { Box, Button, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React, { useState } from 'react';

// Define the VacancyCard component
const VacancyCard = ({ el }) => {
    // State to manage whether the button should be displayed
    const [state, setState] = useState(false);

    // Mouse enter event handler to display the button
    const mouseEnter = () => {
        setState(true);
    };

    // Mouse leave event handler to hide the button
    const mouseOut = () => {
        setState(false);
    };

    // Render the VacancyCard component
    return (
        <Box
            p={"30px 10px"}
            bg={"#fefbec"}
            m={"30px 0"}
            borderRadius={"10px"}
            onMouseOver={mouseEnter}
            onMouseOut={mouseOut}
            cursor="pointer"
        >
            <Text margin={"10px"} fontSize={"xl"} fontWeight={"bold"}>
                {el.title}
            </Text>
            <UnorderedList>
                {el.jd.map((e) => {
                    return <ListItem key={e} margin={"10px 10px"}>{e}</ListItem>;
                })}
            </UnorderedList>
            <Button
                bg={"black"}
                color={"white"}
                p={"10px 30px"}
                borderRadius={"20px"}
                display={state ? "block" : "none"}
                transform="translateY(20px)"
                transition="opacity 0.3s ease, transform 0.3s ease"
                cursor="url(/path-to-your-circular-image.png), auto" // Replace with actual image path
                _hover={{
                    cursor: "circle",
                }}
            >
                See Details
            </Button>
        </Box>
    );
};

// Export the VacancyCard component as the default export
export default VacancyCard;
