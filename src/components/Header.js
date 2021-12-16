import React from "react";

import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
} from "@chakra-ui/react";

function Header() {
  return (
    <Container maxW={"4xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 28 }}
        align={"center"}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Open Breweries{" "} <Text as={"span"} color={"yellow.400"}>
            at your city
          </Text>
        </Heading>
      </Stack>
    </Container>
  );
}

export default Header;
