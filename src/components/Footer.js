import { Box, Flex, IconButton, Image, Divider,Text } from '@chakra-ui/react'
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
    return (
        <Flex w={"80%"} margin="auto" direction={"column"} justify={"center"} align="center">
            <Divider mt={"100px"} mb={"100px"}/>
            <Box>
                {/* Menu icon */}
                <Image
                    borderRadius={"5px"}
                    boxSize='90px'
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEVLJ9z///8+DtpFHds5ANpBFNuekerDuvJAEtv6+f69tPGCb+VJIdxJJNxDGdusoO3s6ftUMt6zqO/h3fmNe+fRy/VjSODq5vuRgui3rfDJwvOQf+je2fiIdub08v2wpe5PLN1vV+LVz/abjeqWh+l/a+WlmOxXON5uVuJpUOFeQt/RzPR3YuMlANjy8P1kSuB0XuNrD2LCAAAEqElEQVR4nO3Z61biOhgG4JImbSlJChTkLIiAoKjc/9XtHHtAmL2Xi0Xdzvv8GOAjK/YlbZJ2ggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg7yCJwm/caaI7vXGf3yWjt+Fw/XTbiCweKvKmfX4biVtKJ7xpp7SrO/0hg/gXJEx/fcLfP4a/PyHO0u/4WQkxht/RYEKeUCXRO5hQSskrY2i/kuJrc1IvBkISU9UNVCfyvC6aS8jpQ3896s77eyrkYDweH7kfQ0mf0nk3X0chK5qH5DRRzfPpc0AqGZNwM80/8ukgkXy/GY9nRX0Wqy6GYymbSshe1y1n3Qv1S0xcwi0vvtpQ15weR77WSqXfuAqa+WJ78T7Vr1yY+q7t64P3ZhKSRavCfEh9wsVj+c3OHhlNq80fH+yVysWoUs1yHUgn5Dyv1KO8iYSsFtANjU/YrlY/+ZeAqkVPVwX9+NKJTijCbr3WQELx4v72dJlNfaAiofIRp+5MHarzVM7M2zw67sdT+1afvfTNNpn3s4kfTJ2QDu37PM3iIuudE7pjSBlNGJXxl4R9Sgj9tCcrF4KZH2FJWcglPZrqTAbh1rzrPqlOEtpp+4Rhx7x7PFHCCPUny30T8oPLYSZFQftnCWMzv8gn8+HE5bP52k069gqe04DOTRBmr0n24BO6urALB/tsImGy1H9z5OfJgI7qCQO7HFAzRQykPeREOLb1iq9M2ye/PSCRTejqJ78ykl0DCe0hb4rVmUW1hGs/WmZ+iRgxg8Z6DjflLZkVF6QhmE0ox2d10kRCc4X1ioWbv9YSZm6dZ5lN+NK64JmaE6GflL3OTUJ7gizP6vdOaH7t8tmQWNUS+sF1CcnpUsKI1toqZGoS2pEfV+rxD0gYtKsJ/c77jwmfbcLzJCqhqQ8q9bSBhGZmF9fO0rOEiZkl189R1e7THnhW7lzpunKWntfvnTCv/8x2Rb+WkEn9Mn+XXsLUP0JuTHBa9to2CS/X771aTMwxl6tF/qeE0i4Pr367zfcrfXdhB74sMzOHqtXC1nv1+r1X/L35o/7GgZoV/XpCe94NXWtOPlqTF+ZX0dxuG4JQtG1C4es2YrhqN5DQDZqaLVgYJi7g9YSiZ76P1f1sKEloJv+dDOzC15oLqsr0xe5AVUJXz1eqzvze794J3batNdotOpnfNF9NGBAziK3HyaAzSO2QHLgfRBV90HEbcrfzdvXpZrFzm/D73z2R4s61dD2hH/NSpA+YX9gK6ITuSixrTSQM7I7E2/xLQiHrEZf2mpSH6q3kpLgDlodq47jfSMKAdoo7+e6BXl7xza+w04tK5XGFan/0s3C4Kp53tLJ3s0CapxhhUNZ3dNNMwkAmmzcV8nE4oOr+qN+fDMIgnE3Um4Ob6PlWfzraTySI5vo3GcVbWj5tFPSUqquuPc96hJ9U86Vw9X2sr8Y86yXiVXdz2yeU/5Gk1D8IlEmS6GMI1WtS/Acpr34Stjkl9WPlxFSZsM3ZhbrQ3dwjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPy//AOVOEN1G44GnAAAAABJRU5ErkJggg=='
                    alt=''
                />
            </Box>
            <Flex m={"50px 100px"}>
                <Flex juatify="center" align="center"><i class="fa-solid fa-location-dot"></i> <Text ml={"10px"} fontSize="md">AugustaBre, Berlin</Text></Flex>
                <Flex ml = "20px"juatify="center" align="center"><i class="fa-solid fa-location-dot"></i> <Text  ml={"10px"} fontSize="md">hi@ahead.gmail.com</Text></Flex>
            </Flex>
        </Flex>
    )
}

export default Footer