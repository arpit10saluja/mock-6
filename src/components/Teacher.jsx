import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Teacher({avatar, name, prof}) {
  return (
    <Box gap={"10px"} textAlign={"center"} padding={"10px"}>
        <Image src={avatar} width={"100%"}/>
        <Text color={"#423f8d"} fontWeight={"bold"} fontSize={"25px"}>{name}</Text>
        <Text fontSize={"20px"}>{prof}</Text>
    </Box>
  )
}