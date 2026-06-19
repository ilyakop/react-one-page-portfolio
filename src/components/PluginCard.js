import { Heading, HStack, Link, Spacer, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import CardWrapper from "./CardWrapper";

const PluginCard = ({ title, description, platform, primaryStat, secondaryStat, rating, tags = [], url }) => {
  return (
    <CardWrapper as="article" p={5} h="100%">
      <VStack align="left" spacing={3} h="100%">
        <Text
          fontFamily="mono"
          fontSize="xs"
          color="brand.muted"
          textTransform="uppercase"
          letterSpacing="0.08em"
        >
          {platform}
        </Text>
        <Heading as="h3" fontFamily="heading" fontSize="md" letterSpacing="-0.02em">
          {title}
        </Heading>
        <Text color="brand.muted" fontSize="sm">
          {description}
        </Text>
        <HStack fontFamily="mono" spacing={4} align="baseline">
          <Text fontSize="sm" fontWeight="medium" color="brand.body">
            {primaryStat}
          </Text>
          {secondaryStat && (
            <Text fontSize="xs" color="brand.muted">
              {secondaryStat}
            </Text>
          )}
          <HStack spacing={1} color="brand.accent">
            <FontAwesomeIcon icon={faStar} size="xs" />
            <Text fontSize="md" fontWeight="bold">
              {rating}
            </Text>
          </HStack>
        </HStack>
        <Wrap pt={1}>
          {tags.map((tag) => (
            <WrapItem key={tag}>
              <Text
                as="span"
                fontFamily="mono"
                fontSize="xs"
                bg="brand.bg"
                color="brand.accent"
                border="1px solid"
                borderColor="brand.border"
                borderRadius="full"
                px={3}
                py={1}
              >
                {tag}
              </Text>
            </WrapItem>
          ))}
        </Wrap>
        <Spacer />
        <Link
          isExternal
          href={url}
          alignSelf="flex-start"
          mt={2}
          fontFamily="mono"
          fontSize="xs"
          color="brand.accent"
          border="1px solid"
          borderColor="brand.accent"
          borderRadius="full"
          px={4}
          py={2}
          _hover={{ bg: "brand.accent", color: "black", textDecoration: "none" }}
        >
          View on {platform} →
        </Link>
      </VStack>
    </CardWrapper>
  );
};

export default PluginCard;
