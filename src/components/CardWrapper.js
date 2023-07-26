import { Box } from "@chakra-ui/react";

const CardWrapper = (props) => {
  return (
    <Box
      {...props}
      overflow={'hidden'}
      bg="white"
      color="#333"
      boxShadow={'2xl'}
      borderRadius="xl">
        {props.children}
    </Box>
  );
};

export default CardWrapper;