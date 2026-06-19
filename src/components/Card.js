import { Heading, Image, Link, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CardWrapper from "./CardWrapper";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc, tags = [], url = "", size = "big" }) => {
  let imageHeight = 300,
    headingSize = "lg",
    cardPadding = "6";

  if (size === "small") {
    imageHeight = 180;
    headingSize = "md";
    cardPadding = "5";
  }

  return (
    <CardWrapper as="article" role="group">
      <VStack align="stretch" spacing={0}>
        {imageSrc && (
          <Image
            h={imageHeight}
            w="100%"
            objectFit="cover"
            objectPosition="left top"
            src={imageSrc}
            alt={`Screenshot of ${title} project`}
            loading="lazy"
            filter="grayscale(70%) saturate(60%) brightness(90%)"
            transition="filter 0.3s ease-out"
            _groupHover={{ filter: "none" }}
          />
        )}
        <VStack w="100%" align="left" padding={cardPadding} spacing={3}>
          <Heading as="h3" fontFamily="heading" fontSize={headingSize} letterSpacing="-0.02em">
            {title}
          </Heading>
          {url && (
            <Link
              isExternal
              href={url}
              color="brand.accent"
              fontFamily="mono"
              fontSize="xs"
            >
              {url.replace(/(^\w+:|^)\/\//, "")} <FontAwesomeIcon icon={faExternalLink} size="xs" />
            </Link>
          )}
          <Text color="brand.muted" fontSize="sm">
            {description}
          </Text>
          <Wrap pt={2}>
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
        </VStack>
      </VStack>
    </CardWrapper>
  );
};

export default Card;
