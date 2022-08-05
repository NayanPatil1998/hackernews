import {
  color,
  Center,
  Spinner,
  Box,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import { fetchPost } from "../../api/axios";
import CommentSection from "../../Components/CommentSection";
import { Container } from "../../Components/Container";
import Navbar from "../../Components/Navbar";
import Post from "../../Components/Post";

type Props = {};

const PostDetail = (props: Props) => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  const bgColor = { light: "#ebebeb", dark: "#030303" };

  const color = { light: "black", dark: "white" };

  const { id: postID } = router.query;

  const {
    isLoading,
    data: post,
    error,
    isError,
    status,
  } = useQuery(postID as string, async () => {
    return await fetchPost(postID as string);
  });
  return (
    <Container>
      <Navbar />
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
      ) : isError || error ? (
        <Box
          bg={bgColor[colorMode]}
          color={color[colorMode]}
          margin="2"
          h="100vh"
        >
          <Center height="full">
            <Text>Something Went Wrong!</Text>
          </Center>
        </Box>
      ) : (
        <VStack w={{ base: "full", lg: "50%" }}>
        <Post isOnPostScreen  post={post?.data!} />
        <CommentSection comments={post?.data.children! || []} />
        {/* <CommentSection postIdentifier={post.data.identifier} slug={post.data.slug} /> */}
      </VStack>
      )}
    </Container>
  );
};

export default PostDetail;
