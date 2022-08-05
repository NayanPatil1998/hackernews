import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Post from "./Post";
type Props = {};

const HomeSection = (props: Props) => {
  const searchInputBgColorMode = useColorModeValue("white", "#212122");
  const searchInputTextColorMode = useColorModeValue("black", "white");
  return (
    <VStack spacing="10" width="full">
      <InputGroup
        pos="relative"
        width={{
          base: "90vw",
          sm: "sm",
          md: "xl",
          xl: "2xl",
        }}
      >
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          // onChange={search}
          placeholder="Search across HackerNews"
          textColor={searchInputTextColorMode}
          bgColor={searchInputBgColorMode}
        />
      </InputGroup>
      <VStack w="70vw" >
        <Post />
      </VStack>
    </VStack>
  );
};

export default HomeSection;
