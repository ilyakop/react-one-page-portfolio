import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

const skillGroups = [
  {
    title: "Frontend",
    emphasis: true,
    skills: [
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "Responsive Design",
      "Accessibility",
    ],
  },
  {
    title: "Backend",
    skills: ["PHP (OOP)", "Node.js", "REST API Design", "GraphQL", "MySQL", "PostgreSQL"],
  },
  {
    title: "WordPress",
    emphasis: true,
    skills: [
      "Custom Plugin Development",
      "Theme Development",
      "Gutenberg Blocks",
      "Headless WordPress",
      "WooCommerce",
      "WordPress Multisite",
      "Performance Optimization",
      "WP REST API",
      "ACF",
    ],
  },
  {
    title: "Infrastructure",
    skills: ["AWS", "Azure", "Git", "CI/CD", "Vercel", "Docker", "Webpack", "Caching Strategy", "Database Optimization"],
  },
  {
    title: "Leadership",
    skills: ["Technical Architecture", "Code Reviews", "Mentoring", "Remote Team Leadership", "Agile", "Client Communication"],
  },
];

const SkillsSection = () => {
  const { ref, style } = useScrollFadeIn();

  return (
    <FullScreenSection id="skills-section" alignItems="flex-start" p={8}>
      <Box ref={ref} style={style} w="100%" display="flex" flexDirection="column" gap={8}>
      <Heading as="h2" fontFamily="heading" fontSize={{ base: "3xl", md: "4xl" }} pt={8}>
        Skills &amp; Expertise
      </Heading>
      <Box display="flex" flexDirection="column" gap={10} w="100%">
        {skillGroups.map((group, i) => (
          <Box key={group.title}>
            {i > 0 && <Box borderTop="1px solid" borderColor="brand.border" mb={6} />}
            <Text
              fontFamily="mono"
              fontSize="sm"
              color={group.emphasis ? "brand.accent" : "brand.muted"}
              pb={4}
              textTransform="uppercase"
              letterSpacing="0.08em"
            >
              {group.title}
            </Text>
            <Wrap spacing={3}>
              {group.skills.map((skill) => (
                <WrapItem key={skill}>
                  <Text
                    as="span"
                    fontFamily="mono"
                    fontSize="sm"
                    color="brand.accent"
                    bg="brand.surface"
                    border="1px solid"
                    borderColor="brand.borderStrong"
                    borderRadius="8px"
                    px={4}
                    py={2}
                  >
                    {skill}
                  </Text>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        ))}
      </Box>
      </Box>
    </FullScreenSection>
  );
};

export default SkillsSection;
