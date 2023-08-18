import '@/styles/globals.css'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
