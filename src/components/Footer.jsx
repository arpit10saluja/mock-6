import {
  Box,
  Container,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      justifyContent={"space-between"}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={10}
        justifyContent={"space-between"}
      >
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr" }}
          spacing={8}
          justifyContent={"space-evenly"}
        >
          <Stack spacing={6}>
            <Box>
              <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo.png" />
            </Box>
            <Text fontSize={"sm"} textAlign={"left"}>
              Users and submit their own items. You can create different
              packages and by connecting with your PayPal or Stripe account
              charge users for registration.
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Quick Links</ListHeader>
            <Link href={"#"}>Classes</Link>
            <Link href={"#"}>Join with us</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Events</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>About Us</ListHeader>
            <Link href={"#"}>Our Team</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Testimonial</Link>
            <Link href={"#"}>Programing</Link>
            <Link href={"#"}>User Stories</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
