import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { Text } from '@chakra-ui/react'

const greeting = "Hello, I am Illia!";
const bio1 = "Full Stack Developer";
const bio2 = "weaving lines of code into mesmerizing digital tapestries, where functionality dances with aesthetics to create unforgettable online experiences";
const avatar = "https://avatars.githubusercontent.com/u/1440140"

// Implement the UI for the LandingSection component according to the instructions. 
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
  >
    <VStack maxW={600}>
      
      <Avatar
        size='2xl'
        name='Illia Kopturov'
        src={avatar}
      />
      
      <Text
        fontSize='xl'
        >
        {greeting}
      </Text>
      
      <Heading 
        as='h1' 
        size='2xl' 
        noOfLines={1}>
        {bio1}
      </Heading>
      
      <Text 
        fontSize='lg'
        align='center'
        >
        {bio2}
      </Text>
    
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
