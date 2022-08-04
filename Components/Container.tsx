import { Flex, useColorMode, FlexProps, HStack, Box } from "@chakra-ui/react";

export const Container = (props: any) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "#ebebeb", dark: "#030303" };

  const color = { light: "black", dark: "white" };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      minH="100vh"
      {...props}
    >
      {props.children}
    </Box>
  );
};
