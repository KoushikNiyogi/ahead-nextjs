import React from "react";
import {
  Flex,
  Box,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepSeparator,
  StepTitle,
  StepDescription,
  Text
} from "@chakra-ui/react";
import { useSteps } from "@chakra-ui/react";

const steps = [
  { title: 'First', description: 'Answer questions on your social skill' },
  { title: 'Second', description: 'let others answer same questions about you' },
  { title: 'Third', description: 'Find where you and others see the things the same way - and where not' },
];

function Stepper1() {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Box  w={"90%"} margin={"20px auto"} >
      <Stepper w={"70%"} margin={"auto"} activeStep={activeStep} orientation="horizontal">
        {steps.map((step, index) => (
          <Step key={index}>

            <StepIndicator bg={"blue"}>
              <StepStatus
                active={<StepNumber />}
              />
            </StepIndicator>


            <StepSeparator
              style={{border:"2px dashed black"}}
            />
          </Step>
        ))}
      </Stepper>
      <Flex w={"90%"} margin={"auto"} justify={"space-around"}>
        {
          steps.map((step) => {
            return <Box  maxWidth={"300px"} mt={"20px"}>
              <Text color="black" data-aos="zoom-in" mb={"10px"} data-aos-duration="1000" data-aos-delay="200">{step.description}</Text>
            </Box>
          })
        }
      </Flex>
    </Box>
  );
}

export default Stepper1
