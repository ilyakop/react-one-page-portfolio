import { Box } from "@chakra-ui/react";

const CardWrapper = (props) => {
  return (
    <Box
      {...props}
      bg="white"
      color="#333"
      boxShadow={'2xl'}
      borderRadius="2xl">
        {props.children}
    </Box>
  );
};

export default CardWrapper;