import { Box, Heading, HStack, Image, Link, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CardWrapper from "./CardWrapper";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc, tags=[], url="" }) => {
  return (
    <CardWrapper>
      <VStack>
        <Image
          filter={'grayscale(80%)'}
          h={300}
          w={'100%'}
          objectFit={'cover'}
          src={imageSrc}>
        </Image>
        <VStack
          w={'100%'}
          align={'left'}
          padding="8">
          <Heading
            fontSize={'2xl'}>
            {title}
          </Heading>
          {(url && 
            <Link isExternal 
              href={url}
              color={"blue.700"}>
                {url.replace(/(^\w+:|^)\/\//, '')} <FontAwesomeIcon icon={faExternalLink} size="xs"/>
            </Link> )}
          <Text >
            {description}
          </Text>
          <Wrap
            pt={4}>
            {tags.map((tag)=>(
              <WrapItem
                key={tag}
                bg={'#9b60b3'}
                color={'#fff'}
                borderRadius={'sm'}
                px={2}
                py={1}
                >{tag}</WrapItem>
            ))}
          </Wrap>
        </VStack>
      </VStack>
    </CardWrapper>
  );
};

export default Card;
