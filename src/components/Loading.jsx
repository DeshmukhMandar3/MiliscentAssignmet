import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

const Loading = ({ isLoading }) => {
  return (
    <Box
      position="absolute"
      left="50%"
      top="50%"
      display={isLoading ? "block" : "none"}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="teal.500"
        size="xl"
      />
    </Box>
  );
};

export default Loading;
