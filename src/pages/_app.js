// Import required dependencies
import '@/styles/globals.css'; // Import global CSS styles
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import AOS from "aos"; // Import AOS library for animations
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from 'react';

// Define the App component
export default function App({ Component, pageProps }) {
    // Initialize AOS animations when the component mounts
    useEffect(() => {
        AOS.init();
    }, []);

    // Render the App component
    return (
        <ChakraProvider>
            {/* Apply Chakra UI's global CSS reset */}
            <CSSReset />
            {/* Render the main component with its pageProps */}
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
