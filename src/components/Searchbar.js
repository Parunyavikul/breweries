import React from "react";
import { Container, Input } from "@chakra-ui/react";

function Searchbar() {
  return (
    <><Container maxW={"2xl"} px={20} py={0}>
      <Input variant="flushed" fontSize={{ base: "sm", sm: "lg", md: "2xl" }} placeholder="Search for your city . . ." />
    </Container>
    </>
  );
}

export default Searchbar;
