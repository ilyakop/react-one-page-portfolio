import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" backgroundColor="brand.bg" borderTop="1px solid" borderColor="brand.border">
      <Flex
        margin="0 auto"
        px={12}
        color="brand.muted"
        justifyContent="center"
        alignItems="center"
        maxWidth="1024px"
        height={16}
        fontFamily="mono"
        fontSize="xs"
      >
        <Text>
          Illia Kopturov • © {new Date().getFullYear()} • Built with{" "}
          <Link color="brand.accent" href="https://react.dev/" isExternal>
            React
          </Link>{" "}
          and{" "}
          <Link color="brand.accent" href="https://chakra-ui.com/" isExternal>
            Chakra UI
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};
export default Footer;
