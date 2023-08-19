import { Box, Button, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React, { useState } from 'react';

const VacancyCard = ({ el }) => {
    const [state,setState] = useState(false);
  console.log(el);
  const mouseEnter =()=>{
   setState(true)
  }
  const mouseOut = ()=>{
   setState(false)
  }
  return (
    <Box
    p={"30px 10px"}
    bg={"#fefbec"}
    m={"30px 0"}
    borderRadius={"10px"}
    onMouseOver={()=>mouseEnter()}
    onMouseOut={()=>mouseOut()}
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
      cursor="url(/path-to-your-circular-image.png), auto" 
      _hover={{
        cursor:"circle",
      }}
    >
      See Details
    </Button>
  </Box>
  );
};

export default VacancyCard;
