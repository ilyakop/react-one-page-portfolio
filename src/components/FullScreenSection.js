import * as React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, id, ...boxProps }) => {
  return (
    <VStack as="section" id={id} backgroundColor="brand.bg" color="brand.body" w="100%">
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
