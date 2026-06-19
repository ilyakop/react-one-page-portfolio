import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

const stats = [
  { value: "30,000+", label: "platform users" },
  { value: "12+", label: "years of experience" },
  { value: "7,415", label: "CodeCanyon sales · 4.63★" },
  { value: "300K+", label: "WordPress.org downloads · 4.3★" },
];

const AboutSection = () => {
  const { ref, style } = useScrollFadeIn();

  return (
    <FullScreenSection id="about-section" alignItems="flex-start" justifyContent="center" p={8}>
      <Box ref={ref} style={style} w="100%" display="flex" flexDirection="column" gap={10}>
      <Heading as="h2" fontFamily="heading" fontSize={{ base: "3xl", md: "4xl" }}>
        A bit about me
      </Heading>
      <Text fontSize={{ base: "md", md: "lg" }} color="brand.body" maxW="720px">
        I've spent 12+ years building things on the web — from a WordPress website builder used
        by 30,000 professionals, to high-traffic e-commerce systems, to independent plugins used
        by tens of thousands of developers worldwide. I work across the full stack: deep in PHP
        and WordPress architecture, and equally at home in React, Next.js, and Node.js. I work
        remotely with distributed teams worldwide.
      </Text>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(2,minmax(0,1fr))", md: "repeat(4,minmax(0,1fr))" }}
        gridGap={8}
        w="100%"
      >
        {stats.map((stat) => (
          <VStack key={stat.label} align="left" spacing={1}>
            <Text fontFamily="heading" fontSize={{ base: "3xl", md: "4xl" }} color="brand.accent" letterSpacing="-0.02em">
              {stat.value}
            </Text>
            <Text fontFamily="mono" fontSize="xs" color="brand.muted">
              {stat.label}
            </Text>
          </VStack>
        ))}
      </Box>
      </Box>
    </FullScreenSection>
  );
};

export default AboutSection;
