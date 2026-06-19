import { Box } from "@chakra-ui/react";

const CardWrapper = (props) => {
  return (
    <Box
      {...props}
      overflow="hidden"
      bg="brand.surface"
      color="brand.body"
      border="1px solid"
      borderColor="brand.border"
      borderRadius="lg"
      transition="background-color 0.2s ease-out, border-color 0.2s ease-out"
      _hover={{ borderColor: "brand.accent", bg: "brand.surfaceHover" }}
    >
      {props.children}
    </Box>
  );
};

export default CardWrapper;
