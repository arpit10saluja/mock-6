// import { Box, Button, HStack, Image, Link } from "@chakra-ui/react";
// import React from "react";

// export default function Navbar() {
//   return (
//     <Box display={"flex"} justifyContent={"space-around"} padding={"10px"}>
//       <Box>
//         <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo.png" />
//       </Box>
//       <HStack fontSize={"20px"} gap={"20px"}>
//         <Link>Home</Link>
//         <Link>Class</Link>
//         <Link>About</Link>
//         <Link>Blog</Link>
//         <Link>Contact</Link>
//         <Button colorScheme="blue" borderRadius={"10px"}>Enroll Now</Button>
//       </HStack>
//     </Box>
//   );
// }

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Home", "Class", "About", "Blog", "Contact"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box justifyContent={"space-between"}>
      <HStack bg={useColorModeValue("gray.100", "gray.900")} px={4} justifyContent={"space-between"}>
        <HStack
          alignItems={"center"}
        >
          <Box>
            <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo.png" />
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }} >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            <Button colorScheme="blue">Enroll Now</Button>
          </HStack>
        </HStack>


        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Button colorScheme="blue">Enroll Now</Button>
            </Stack>
          </Box>
        ) : null}
      </HStack>
    </Box>
  );
}
