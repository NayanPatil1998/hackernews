import { Box, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Box width="full" bgColor="#395697" px="10" py="5" >
      <Text fontSize="4xl" color="white" fontWeight="bold">The Hacker News</Text>
    </Box>
  );
};

export default Navbar;
