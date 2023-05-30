import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import OfferCard from "./OfferCard";
import Teacher from "./Teacher";
const data = [
  {
    image:
      "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img3.png",
    title: "Intelligent Challenge",
    desc: "The words you use in your written communica speak volumes.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img1.png",
    title: "Intelligent Challenge",
    desc: "The words you use in your written communica speak volumes.",
  },
  {
    image:
      "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img2.png",
    title: "Intelligent Challenge",
    desc: "The words you use in your written communica speak volumes.",
  },
];


const teacher=[
    {
        avatar:"https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team1.png",
        name:"Mr. Jacson Clay",
        prof:"Sports Instrutor"
    },
    {
        avatar:"https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png",
        name:"Buster Hyman",
        prof:"Sports Instrutor"
    },
    {
        avatar:"https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team3.png",
        name:"Amilia Kauly",
        prof:"Sports Instrutor"
    },
    {
        avatar:"https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team4.png.webp",
        name:"Mr. Hanyr Clay",
        prof:"Sports Instrutor"
    },
]

function home() {
  return (
    <Box>
      <Box fontSize={"35px"} fontWeight={"bold"} display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)"]}>
        <Text color={"#6865a3"} >Welcome to our</Text>
        <Text color={"#ed078b"}>Kindergarten</Text>
      </Box>
      <Box marginBottom={"50px"}>
        <Text fontSize={"20px"} width={"60%"} margin={"auto"}>
          Our set he for firmament morning sixth subdue today the darkness
          creeping gathered divide our let god moving today. Moving in fourth
          air night bring upon lesser subdue fowl male signs.
        </Text>
      </Box>

      <Box justifyContent={"space-evenly"} padding={"30px"} display={"grid"} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)"]}>
        <Box>
          <HStack padding={"20px"} gap={"20px"}>
            <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon1.svg" />
            <Box width={"75%"} textAlign={"left"} lineHeight={"45px"}>
              <Text color={"#1f97d4"} fontWeight={"bold"} fontSize={"30px"}>
                Inter School Sports
              </Text>
              <Text fontSize={"20px"}>
                The words you use in your written communica speak volumes.
              </Text>
            </Box>
          </HStack>
          <HStack padding={"20px"} gap={"20px"}>
            <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon2.svg" />
            <Box width={"75%"} textAlign={"left"} lineHeight={"45px"}>
              <Text
                color={"RGB(251 206 15)"}
                fontWeight={"bold"}
                fontSize={"30px"}
              >
                Friendly Environment
              </Text>
              <Text fontSize={"20px"}>
                The words you use in your written communica speak volumes.
              </Text>
            </Box>
          </HStack>
          <HStack padding={"20px"} gap={"20px"}>
            <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon3.svg" />
            <Box width={"75%"} textAlign={"left"} lineHeight={"45px"}>
              <Text color={"#12d9df"} fontWeight={"bold"} fontSize={"30px"}>
                Multimedia Class
              </Text>
              <Text>
                The words you use in your written communica speak volumes.
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box>

        <Image
          src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/about2.png"
          width={"850px"}
          />
          </Box>
      </Box>

      <Box padding="20px">
        <Text fontSize={"40px"} color={"#423f8d"} fontWeight={"bold"}>
          Classes We Offer
        </Text>
        <Text fontSize={"20px"} width={"60%"} margin={"auto"} color={"#423f8d"}>
          Our set he for firmament morning sixth subdue today the darkness
          creeping gathered divide our let god moving today. Moving in fourth
          air night bring upon lesser subdue.
        </Text>
      </Box>
      <Box
        justifyContent={"space-between"}
        padding={"30px"}
        display={"grid"}
        gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]}
      >
        {data.map((el, index) => {
          return <OfferCard {...el} key={index} />;
        })}
      </Box>

      <Box padding="20px">
        <Text fontSize={"40px"} color={"#423f8d"} fontWeight={"bold"}>
        Expert Teachers
        </Text>
        <Text fontSize={"20px"} width={"60%"} margin={"auto"} color={"#423f8d"}>
          Our set he for firmament morning sixth subdue today the darkness
          creeping gathered divide our let god moving today. Moving in fourth
          air night bring upon lesser subdue.
        </Text>
      </Box>
      <Box
        justifyContent={"space-between"}
        padding={"30px"}
        display={"grid"}
        gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(4,1fr)"]}
      >
       {teacher.map((el, index)=>{
        return <Teacher {...el} key={index} />;
       })}
      </Box>


    </Box>
  );
}

export default home;
