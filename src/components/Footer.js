import React from "react";
import {Box, Flex, Link} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#221d32">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Illia Online • © 2023 • Build with <Link color="lavender" href="https://react.dev/">React</Link> and <Link color="lavender" href="https://chakra-ui.com/">Chakra UI</Link></p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
