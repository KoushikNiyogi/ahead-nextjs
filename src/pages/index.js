import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Content_section from '@/components/Content_section'
import Carousel from '@/components/Caurousel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <Box>
      <Navbar />
      <Content_section/>
      <Box h={"400px"} bg={"black"}></Box>
      <Carousel/>
      <Box h={"1500px"} bg={"black"}></Box>
      <Box h={"1500px"} bg={"blue"}></Box>
    </Box>
  )
}
