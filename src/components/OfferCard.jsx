import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function OfferCard({image, title, desc}) {
  return (
    <Box gap={"10px"} textAlign={"left"} padding={"10px"}>
        <Image src={image} width={"100%"}/>
        <Text color={"#423f8d"} fontWeight={"bold"} fontSize={"30px"}>{title}</Text>
        <Text  width={"80%"} fontSize={"20px"}>{desc}</Text>
        <HStack justifyContent={"space-between"}
        padding={"10px"}>  
            <VStack fontSize={"18px"} lineHeight={"20px"}>
                <Text color={"#ed078b"} fontSize={"25px"} fontWeight={"bold"}>3-5</Text>
                <Text>Age Group</Text>
            </VStack>
            <VStack fontSize={"18px"} lineHeight={"20px"}>
                <Text color={"#FBCE0F"} fontSize={"25px"} fontWeight={"bold"}>30</Text>
                <Text>Classes</Text>
            </VStack>
            <VStack fontSize={"18px"} lineHeight={"20px"}>
                <Text color={"#12D9DF"} fontSize={"25px"} fontWeight={"bold"}>10/h</Text>
                <Text>Class Price</Text>
            </VStack>
        </HStack>
    </Box>
  )
}
