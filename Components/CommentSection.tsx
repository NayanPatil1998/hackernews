import {
  Image,
  VStack,
  Box,
  Text,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import React, { createRef, useEffect, useRef } from "react";
import { Comment } from "../types/types";

type Props = {
    comments: Comment[]
};

const CommentSection = ({comments}: Props) => {
  const bgColorCard = useColorModeValue("white", "#1a1a1b");

  return (
    <Box
      width={{
        base: "90vw",
        md: "60vw",
      }}
      p={{
        base: "2",
        md: "4",
      }}
      bgColor={bgColorCard}
    >
      <VStack alignSelf="start">
        <Text alignSelf="start" fontSize="md" fontWeight="bold">
          Comments
        </Text>
        {comments.map((comment) => (
        <Comment
        key={comment.id}
          comment={comment}
        />
      ))}
      </VStack>
    </Box>
  );
};

export default CommentSection;

type CommentProps = {
    comment: Comment
};

const Comment = ({comment}: CommentProps) => {


  return (
    <Box width="full" borderRadius="md" p="4">
      <VStack>
        <HStack width="full">
          <Image borderRadius={50} width="25px" height="25px" src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder-800x818.png" />

          <Text
            fontSize="md"
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
          >
            {" "}
            
              {comment.author || "anonymous"}

          </Text>
          <Text fontSize="sm" color="grey">
            {dayjs(comment.created_at).fromNow()}
          </Text>
        </HStack>
        <Box width="full">
            
          <Box dangerouslySetInnerHTML={{__html :  comment.text || '<p>[Comment has no text]</p>'}} height={14} fontSize="lg" noOfLines={2} >
            
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};
