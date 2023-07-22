import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import CardWrapper from "./CardWrapper";

const Card = ({ title, description, imageSrc }) => {
  return (
    <CardWrapper>
      <VStack>
        <Image
          src={imageSrc}
          borderRadius="2xl">
        </Image>
        <VStack
          padding="8">
          <Heading>
            {title}
          </Heading>
          <Text >
            {description}
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </VStack>
      </VStack>
    </CardWrapper>
  );
};

export default Card;
