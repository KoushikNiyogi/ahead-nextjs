import {
    Box,
    Text,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
  } from '@chakra-ui/react'
  import style from "../styles/work.module.css"
  import stepStyles from "../styles/stepstyle.module.css"

const steps = [
    { title: 'It is not easy as 1-2-3.', description: 'The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)' },
    { title: 'Old habbits are hard to break', description: 'Add bad behaviours die hard. Fortunately, we give you great, science- backed techniques to use' },
    { title: 'You and your motivation dont have a long-term relationship', description: 'Luckily, we can proactively prepare you for the marathon, not just the race.Effective, memorable exercises will help you stick to your goals.' },
    { title: 'Books just dont offer practical.', description: 'Remember when you learned to ride a bike just by reading. Yeah, we dont either.We help you to take concrete small steps towards your goals. Learning just abut, then immediately springing into action.' },
    { title: 'Inspiration is great, but then what.', description: 'We make sure your energy from all the content you consume does not fizzle out.' },
  ]
  
  export default function Vertical_stepper() {
    const { activeStep } = useSteps({
      index: 1,
      count: steps.length,
    })
  
    return (
      <Stepper margin={"50px 0"} height={"800px"} index={activeStep} orientation='vertical' gap='0'>
        {steps.map((step, index) => (
          <Step key={index} className={stepStyles.customStep}>
          <StepIndicator className={stepStyles.chakra_step_indicator} bg="blue">
            <StepStatus />
          </StepIndicator>
    
          <Box maxWidth="80%" flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>
    
          <StepSeparator className={stepStyles.customSeparator} />
        </Step>
        
        ))}
      </Stepper>
    )
  }
  
