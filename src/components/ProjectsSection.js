import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projectsHighlighted = [
  {
    title: "Oxygen Website Builder",
    url: "https://oxygenbuilder.com",
    description:
      "Lead developer and Architect at famous Oxygen Website Builder App used by tens of thousands designers and studios worldwide. Oxygen is a versatile and user-friendly tool that empowers users to design and customize their WordPress websites with ease.",
    getImageSrc: () => require("../images/oxygenbuilder.png"),
    tags: ['angularjs','php','wordpress','rest api', 'ui/ux']
  },
  {
    title: "Ayuda Services Marketplace",
    url: "https://ayuda.shop",
    description:
      "Ayuda is a Marketplace for professionals and clients to find and provide services in Latin America market. Provide an Airbnb like experience in finding help with your home tasks.",
    getImageSrc: () => require("../images/ayuda.png"),
    tags: ['react','nextjs','tailwindcss','typescript']
  }
]

const projects = [
  {
    title: "Codecademy Translation",
    url: "https://codecademy.com",
    description:
      "It was fun and challenging translating JavaScript lessons from English to Russian for a Codecademy",
    getImageSrc: () => require("../images/codecademy.png"),
    tags: ['javascript','english to russian']
  },
  {
    title: "Car Rentals Service",
    url: "https://car-rentals-cancun.com",
    description:
      "Booking service for renting cars and transfers in Cancun and Riviera Maya.",
    getImageSrc: () => require("../images/cheap-car-rentals.png"),
    tags: ['react','nextjs','tailwindcss','typescript']
  },
  {
    title: "KnowMyRankings",
    description:
      "Minimalist and innovative Google rank tracking service.",
    getImageSrc: () => require("../images/knowmyrankings.png"),
    tags: ['google api','php','wordpress','javascript']
  },
  
];

const ProjectsSection = () => {

  const cardsLoop = (projects) => {
    return (
      projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            tags={project.tags}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))
    )
  }
  
  return (
    <FullScreenSection
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" pt={8}>
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: 'repeat(1,minmax(0,1fr))', md: 'repeat(2,minmax(0,1fr))' }}
        gridGap={8}
      >
          {cardsLoop(projectsHighlighted)}
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={{ base: 'repeat(1,minmax(0,1fr))', md: 'repeat(3,minmax(0,1fr))' }}
        gridGap={8}
      >
        {cardsLoop(projects)}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;