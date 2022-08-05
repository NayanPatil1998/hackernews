import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { isEmpty } from "lodash";
import axios, { CancelTokenSource } from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import PostComponent from "./Post";
import { Post, SearchedPosts } from "../types/types";
type Props = {};

const HomeSection = (props: Props) => {
  const searchInputBgColorMode = useColorModeValue("white", "#212122");
  const searchInputTextColorMode = useColorModeValue("black", "white");
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { colorMode } = useColorMode();

  const bgColor = { light: "#ebebeb", dark: "#030303" };

  const color = { light: "black", dark: "white" };

  let cancelToken: CancelTokenSource;

  const search = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const q = e.target.value;

    if (isEmpty(q.trim())) {
      setSearchResults([]);
      return;
    }
    setIsLoading(true);

    if (typeof cancelToken !== typeof undefined) {
      cancelToken.cancel("Cancelling the previous req");
    }

    cancelToken = axios.CancelToken.source();

    // const response = await searchsubs(q, cancelToken);
    try {
      const response = await axios.get<SearchedPosts>(
        `${BASE_URL}search?query=${q}`,
        { cancelToken: cancelToken.token }
      );
      // console.table(response.data)

      if (response.status === 200) {
        console.table(response.data);
        setSearchResults(response.data.hits);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      // @ts-ignore
      if (error.code !== "ERR_CANCELED") {
        // @ts-ignore
        setError(error.message);
      }
      setIsLoading(false);
    }
  };

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
          onChange={search}
          placeholder="Search across HackerNews"
          textColor={searchInputTextColorMode}
          bgColor={searchInputBgColorMode}
        />
      </InputGroup>
      {isLoading ? (
        <Box
          bg={bgColor[colorMode]}
          color={color[colorMode]}
          margin="2"
          h="100vh"
        >
          <Center height="full">
            <Spinner size="lg" />
          </Center>
        </Box>
      ) : error ? (
        <Text>Something went wrong, Please try again later!</Text>
      ) : searchResults.length === 0 ? (
        <Text>No Post at the moment !</Text>
      ) : (
        <VStack w="70vw" spacing={2}>
          {searchResults.map((post) => {
            return <PostComponent post={post} key={post.objectID} />;
          })}
        </VStack>
      )}
    </VStack>
  );
};

export default HomeSection;
