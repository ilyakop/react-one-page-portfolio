import { Box, Heading, HStack, Image, Link, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CardWrapper from "./CardWrapper";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc, tags=[], url="", size="big" }) => {
  
  let imageHeight=300,
      headingSize='2xl',
      cardPadding='8'

  if (size=='small') {
    imageHeight=200
    headingSize='xl'
    cardPadding='4'
  }
  return (
    <CardWrapper>
      <VStack>
        <Image
          filter={'grayscale(80%)'}
          h={imageHeight}
          w={'100%'}
          objectFit={'cover'}
          objectPosition={'left top'}
          src={imageSrc}>
        </Image>
        <VStack
          w={'100%'}
          align={'left'}
          padding={cardPadding}>
          <Heading
            fontSize={headingSize}>
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
