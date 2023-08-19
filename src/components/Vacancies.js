import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import VacancyCard from './VacancyCard'

const data = [
    {
        title : "Senior Full-Stack Engineer",
        jd : ["Full time position","Berlin or remote","$65-85k, 0.5-1.50% equity share options"]
    },
    {
        title : "Senior Designer",
        jd : ["Full time position","Berlin or remote","$65-85k, 0.5-1.50% equity share options"]
    },
    {
        title : "Superstar Intern",
        jd : ["Full time position","Berlin or remote","$65-85k, 0.5-1.50% equity share options"]
    }
]
const Vacancies = () => {
  return (
    <Box w="90%" margin="30px auto">
      <Text m={"30px 0"} fontSize={"4xl"} fontWeight={"bold"}>Open Vacancies</Text>
      <Flex justify="space-evenly">{
        data.map((el)=>{
            return <VacancyCard key={el.id} el={el}/>
        })
      }</Flex>
    </Box>
  )
}

export default Vacancies