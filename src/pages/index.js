import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Content_section from '@/components/Content_section'
import Carousel from '@/components/Caurousel'
import Content_section2 from '@/components/content_section2'
import Test_Recommendation from '@/components/Test_Recommendation'
import Vacancies from '@/components/Vacancies'
import Footer from '@/components/Footer'
import Work from '@/components/Work'
import Stepper_section from '@/components/Stepper_section'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <Box>
      <Navbar />
      <Content_section/>
      <Box h={"400px"} bg={"black"}></Box>
      <Carousel/>
      <Content_section2/>
      <Stepper_section/>
      <Test_Recommendation />
      <Work/>
      <Vacancies/>
      <Footer />
    </Box>
  )
}
