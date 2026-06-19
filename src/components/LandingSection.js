import React, { useEffect, useState } from "react";
import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const socials = [
  { icon: faGithub, url: "https://github.com/ilyakop", label: "Illia Kopturov on GitHub" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/illiaonline/", label: "Illia Kopturov on LinkedIn" },
  { icon: faInstagram, url: "https://www.instagram.com/illia.online/", label: "Illia Kopturov on Instagram" },
  { icon: faYoutube, url: "https://www.youtube.com/@illia.online", label: "Illia Kopturov on YouTube" },
];

const scrollTo = (id) => () => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const LandingSection = () => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setRevealed(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box
      as="section"
      id="hero-section"
      position="relative"
      overflow="hidden"
      w="100%"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="brand.bg"
      color="brand.body"
      pt={{ base: 24, md: 0 }}
    >
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        pointerEvents="none"
        sx={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(110,231,183,0.08), transparent 45%), radial-gradient(circle at 70% 70%, rgba(167,139,250,0.08), transparent 45%)",
          backgroundSize: "200% 200%",
          animation: "heroGradientShift 18s ease-in-out infinite alternate",
          "@keyframes heroGradientShift": {
            "0%": { backgroundPosition: "0% 0%" },
            "100%": { backgroundPosition: "100% 100%" },
          },
          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
          },
        }}
      />
      <VStack maxW={720} zIndex={1} textAlign="center" spacing={6}>
        <Heading
          as="h1"
          fontFamily="'Epilogue', sans-serif"
          fontSize={{ base: "4xl", md: "7xl" }}
          letterSpacing="-0.03em"
          lineHeight="1.05"
          opacity={revealed ? 1 : 0}
          transform={revealed ? "translateY(0)" : "translateY(12px)"}
          transition="opacity 0.6s ease-out, transform 0.6s ease-out"
          bgGradient="linear(to-r, brand.accent, brand.accent2)"
          bgClip="text"
        >
          Illia Kopturov
        </Heading>
        <Text fontSize={{ base: "xl", md: "2xl" }} fontFamily="heading" color="brand.body">
          Senior Full Stack Engineer
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="brand.muted" maxW="640px">
          12+ years building scalable WordPress platforms, React/Next.js applications, and
          high-traffic e-commerce systems. Led development of a website builder used by 30,000+
          professionals worldwide.
        </Text>
        <HStack spacing={4} pt={2}>
          <Button
            onClick={scrollTo("projects-section")}
            bg="brand.accent"
            color="black"
            _hover={{ bg: "brand.accent2" }}
            fontFamily="mono"
            fontSize="sm"
          >
            See my work
          </Button>
          <Button
            onClick={scrollTo("contact-section")}
            variant="outline"
            borderColor="brand.border"
            color="brand.body"
            _hover={{ borderColor: "brand.accent", color: "brand.accent" }}
            fontFamily="mono"
            fontSize="sm"
          >
            Get in touch
          </Button>
        </HStack>
        <HStack spacing={5} pt={4}>
          {socials.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default LandingSection;
