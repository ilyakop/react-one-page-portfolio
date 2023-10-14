import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projectsHighlighted = [
  {
    title: "Website Builder Application",
    url: "https://oxygenbuilder.com",
    description:
      "I am a Lead developer and Architect at famous Oxygen Website Builder App used by tens of thousands designers and studios worldwide. Oxygen is user-friendly tool for customizing WordPress websites with ease.",
    getImageSrc: () => require("../images/oxygenbuilder.png"),
    tags: ['angularjs','php','wordpress','rest api', 'ui/ux']
  },
  {
    title: "Services Marketplace",
    url: "https://ayuda.shop",
    description:
      "Ayuda is a Marketplace for professionals and clients to find and provide services in Latin America market. Provide an Airbnb like experience in finding help with your home tasks.",
    getImageSrc: () => require("../images/ayuda.png"),
    tags: ['react','nextjs','tailwindcss','typescript']
  },
  {
    title: "New York Real Estate Portal",
    url: "https://ipg-nyc-client.vercel.app/",
    description:
      "Turned static website into Content Managment System using Sanity Studio for Ideal Properties Group - a trusted listing pipeline for unique property finds in New York.",
    getImageSrc: () => require("../images/ipgnyc.png"),
    tags: ['vue','nuxtjs','typescript','sanity']
  }
]

const projects = [
  {
    title: "Headless CMS",
    url: "https://headless-wordpress-nextjs-dusky.vercel.app/",
    description:
      "Headless WordPress to reuse across multiple platforms through an API, enhancing versatility and scalability",
    getImageSrc: () => require("../images/headless-wordpress-cms.png"),
    tags: ['headlesscms','nextjs','vercel','graphql','wordpress']
  },
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
    title: "Google Ranking Service",
    description:
      "Minimalist and innovative Google rank tracking service.",
    getImageSrc: () => require("../images/knowmyrankings.png"),
    tags: ['google api','php','wordpress','javascript']
  },
  
];

const ProjectsSection = () => {

  const cardsLoop = (projects, size) => {
    return (
      projects.map((project) => (
          <Card
            size={size}
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
        gridTemplateColumns={{ base: 'repeat(1,minmax(0,1fr))', md: 'repeat(3,minmax(0,1fr))' }}
        gridGap={8}
      >
          {cardsLoop(projectsHighlighted)}
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={{ base: 'repeat(1,minmax(0,1fr))', md: 'repeat(4,minmax(0,1fr))' }}
        gridGap={6}
      >
        {cardsLoop(projects, 'small')}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;