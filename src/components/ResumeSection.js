import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import CardWrapper from "./CardWrapper";

const skills = [
  {
    title: "React",
    description:
      "Work with React daily. React Hooks, React Context, JSX, Forms, Redux, LSM, Styled Components, Axios",
  },
  {
    title: "Full-stack JavaScript",
    description:
      "Next.js, Mongo, Express, React Node (MERN Stack), Gatsby, Vercel, CI/CD solutions, Jest, React Testing Library",
  },
  {
    title: "WordPress",
    description:
      "Developing custom plugins and themes since 2012. Lead developer of famous Oxygen Website Builder plugin",
  },
  {
    title: "API Design (REST/GraphQL)",
    description:
      "Building scalable internal/external APIs in PHP, JavaScript or Python",
  },
  {
    title: "Object Oriented Design",
    description:
      "Design and develop software system that are easy to maintain and extend over time",
  },
  {
    title: "HTML, CSS",
    description:
      "Work daily with Sass, server rendered templates, client side rendered HTML",
  },
  
];

const ResumeSection = () => {
  return (
    <FullScreenSection
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="resume-section" pt={8}>
        Developer Skills
      </Heading>
      <Flex
        minH='80vh' 
        justifyContent="center"
        alignItems="center" >
        <Box
          display="grid"
          gridTemplateColumns={{ base: 'repeat(2,minmax(0,1fr))', md: 'repeat(3,minmax(0,1fr))' }}
          gridGap={{ base: '6', md: '12' }}
        >
          {skills.map((skill) => (
            <CardWrapper 
              p={6}
              key={skill.title}>
              <Heading as="h4" fontSize='xl' pb={4}>
                {skill.title}
              </Heading>
              <Text>
                {skill.description}
              </Text>
            </CardWrapper>
          ))}
        </Box>
      </Flex>
    </FullScreenSection>
  )
}

export default ResumeSection