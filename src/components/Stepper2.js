import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    Text,
    useSteps,
    Box,
  } from '@chakra-ui/react'

const steps = [
    { title: 'First', description: 'You', color : "#6341ef" },
    { title: 'Second', description: 'Anonymonos 1 ' ,color : "#40c2fc"},
    { title: 'Third', description: 'Anonymonos 2' ,color : "#fdb338" },
    { title: 'fourth', description: 'Anonymonos 3' ,color : "#58c996" }
  ]
  
  export default function Stepper_section2() {
    const { activeStep } = useSteps({
      index: 1,
      count: steps.length,
    })
  
    return (
      <Stepper bg={'white'} borderRadius={"10px"} p={"50px 10px"} w={"70%"} margin={"60px auto"} size='sm' index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator bg={step.color}>
              
            </StepIndicator>
  
            <Box  data-aos="zoom-in" mb={"10px"} data-aos-duration="1000" data-aos-delay="200" zIndex={1} bg={step.color} padding="10px" borderRadius={"10px"} color="white" position="relative" top={index%2==0 ? "-40px" : "40px" } right={"50px"} >
               <Text>{step.description}</Text>
            </Box>
  
            <StepSeparator style={{border : "2px solid black"}}/>
          </Step>
        ))}
      </Stepper>
    )
  }
  
