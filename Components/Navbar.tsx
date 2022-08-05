import { Box, HStack, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";

type Props = {};

const Navbar = (props: Props) => {
  const bgColor = { light: "#395697", dark: "#fe4500" };
  const { colorMode } = useColorMode();

  return (
    <HStack
      justifyContent="space-between"
      width="full"
      bgColor={bgColor[colorMode]}
      px="10"
      py="5"
      mb="10"
    >
      <Text
        fontSize={{
          base: "xl",
          md: "4xl",
        }}
        color="white"
        fontWeight="bold"
      >
        The Hacker News
      </Text>
      <DarkModeSwitch />
    </HStack>
  );
};

export default Navbar;
