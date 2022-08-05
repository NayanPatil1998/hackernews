import { Box, Flex, VStack } from "@chakra-ui/layout";
import { HStack, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useQueryClient } from "react-query";
import { FaRegCommentAlt, FaShare, FaRegBookmark } from "react-icons/fa";

// import { Post } from "../types/post";

dayjs.extend(relativeTime);

interface PostProps {}
const Post: React.FC<PostProps> = () => {
  const bgColor = useColorModeValue("white", "#1a1a1b");
  // const queryClient = useQueryClient();
  const router = useRouter();

  return (
    <Box
      width="90vw"
      p={{
        base: "0.5",
        md: "4",
      }}
      bgColor={bgColor}
    >
      <Flex
        flexDirection={{
          base: "column-reverse",
          md: "row",
        }}
      >
        <Flex
         flexDirection={{
          base: "row",
          md: "column",
        }}
        justifyContent="center"
        alignItems="center"
        p="4"
        borderRight={{
          base: "chocolate",
          md: "1px"

        }}
        borderTop={{
          base: "1px",
          md: "chocolate"

        }}
        >
          <Text marginRight={{base: 2, md:"0.5"}} fontWeight="bold" fontSize="22">14</Text>
          <Text>Points</Text>
        </Flex>
        <Box
          width="full"
          borderRadius="md"
          py="2"
          px="4"
          bgColor={bgColor}
          cursor="pointer"
          textAlign="start"
        >
          <VStack>
          <HStack width="full">
  
              <Text fontSize="sm" color="grey">
               Posted by Nayan patil  · 
               </Text>
              <Text fontSize="sm" color="grey">
                a  mkinute ago
                  {/* <a>{dayjs(post.createdAt).fromNow()}</a> */}
              </Text>
            </HStack>
            <Link href={`/r/`}>
              <Box width="full">
                <Text fontWeight="bold" fontSize="2xl">
                  post.title
                </Text>
              </Box>
            </Link>
            <HStack alignSelf="start" alignItems="center" p="2" _hover={{ cursor: "pointer", bgColor: "#e6e6e6" }}>
                <Icon color="grey" fontSize="20px" as={FaRegCommentAlt} />
                <Text fontSize="md" fontWeight="bold" color="grey">
                  4 Comments
                </Text>
              </HStack>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};
export default Post;
