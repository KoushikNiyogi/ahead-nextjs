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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <Box>
      <Navbar />
      <Content_section/>
      <Box h={"400px"} bg={"black"}></Box>
      <Carousel/>
      <Content_section2/>
      <Test_Recommendation />
      <Vacancies/>
      <Box h={"1500px"} bg={"black"}></Box>
      <Box h={"1500px"} bg={"blue"}></Box>
    </Box>
  )
}
