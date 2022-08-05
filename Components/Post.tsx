import { Box, Flex, VStack } from "@chakra-ui/layout";
import { HStack, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import { Post } from "../types/types";

// import { Post } from "../types/post";

dayjs.extend(relativeTime);

interface PostProps {
  post: Post;
  isOnPostScreen: boolean;
}
const PostComponent: React.FC<PostProps> = ({ post, isOnPostScreen }) => {
  const bgColor = useColorModeValue("white", "#1a1a1b");
  // const queryClient = useQueryClient();
  const router = useRouter();

  return (
    <Box
      width={{
        base: "90vw",
        md: "60vw",
      }}
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
            md: "1px",
          }}
          borderTop={{
            base: "1px",
            md: "chocolate",
          }}
        >
          <Text
            marginRight={{ base: 2, md: "0.5" }}
            fontWeight="bold"
            fontSize="22"
          >
            {post.points || "🍆"}
          </Text>
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
                Posted by {post.author} ·
              </Text>
              <Text fontSize="sm" color="grey">
                <a>{dayjs(post.created_at).fromNow()}</a>
              </Text>
            </HStack>
            {isOnPostScreen ? (
              <Box width="full">
                {post.title ? (
                  <Text fontWeight="bold" fontSize="2xl">
                    {post.title}
                  </Text>
                ) : (
                  <Text fontSize="xl" fontStyle="italic" color="grey">
                    [Post has no title]
                  </Text>
                )}
              </Box>
            ) : (
              <Link href={`/post/${post.objectID}`}>
                <Box width="full">
                  {post.title ? (
                    <Text fontWeight="bold" fontSize="2xl">
                      {post.title}
                    </Text>
                  ) : (
                    <Text fontSize="xl" fontStyle="italic" color="grey">
                      [Post has no title]
                    </Text>
                  )}
                </Box>
              </Link>
            )}
            <HStack
              alignSelf="start"
              alignItems="center"
              p="2"
              _hover={{ cursor: "pointer", bgColor: "#e6e6e6" }}
            >
              <Icon color="grey" fontSize="20px" as={FaRegCommentAlt} />
              <Text fontSize="md" fontWeight="bold" color="grey">
                {post.num_comments || post.children?.length || 0} Comments
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};
export default PostComponent;
