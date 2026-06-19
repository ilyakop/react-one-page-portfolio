import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, Stack } from "@chakra-ui/react";

const socials = [
  {
    icon: faGithub,
    url: "https://github.com/ilyakop",
    label: "Illia Kopturov on GitHub",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/illiaonline/",
    label: "Illia Kopturov on LinkedIn",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/illia.online/",
    label: "Illia Kopturov on Instagram",
  },
  {
    icon: faYoutube,
    url: "https://www.youtube.com/@illia.online",
    label: "Illia Kopturov on YouTube",
  },
];

const navLinks = [
  { label: "Projects", anchor: "projects" },
  { label: "Skills", anchor: "skills" },
  { label: "Reviews", anchor: "testimonials" },
  { label: "About", anchor: "about" },
  { label: "Contact", anchor: "contact" },
];

const Header = () => {
  const [activeAnchor, setActiveAnchor] = useState(null);

  const handleClick = (anchor) => (event) => {
    event.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const elements = navLinks
      .map((link) => ({ anchor: link.anchor, element: document.getElementById(`${link.anchor}-section`) }))
      .filter((entry) => entry.element);

    const heroElement = document.getElementById("hero-section");

    if (elements.length === 0 && !heroElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === heroElement) {
            setActiveAnchor(null);
            return;
          }
          const match = elements.find((e) => e.element === entry.target);
          if (match) setActiveAnchor(match.anchor);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((entry) => observer.observe(entry.element));
    if (heroElement) observer.observe(heroElement);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      backgroundColor="rgba(13, 13, 13, 0.85)"
      backdropFilter="blur(8px)"
      borderBottom="1px solid"
      borderColor="brand.border"
      zIndex={9999}
    >
      <Box color="brand.body" maxWidth="1280px" margin="0 auto">
        <Stack
          direction={{ base: "column", md: "row" }}
          px={{ base: 4, md: 8 }}
          py={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav aria-label="Social links">
            <HStack spacing={5}>
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
          </nav>
          <nav aria-label="Section navigation">
            <HStack spacing={{ base: 4, md: 8 }} fontFamily="mono" fontSize="sm">
              {navLinks.map((link) => {
                const isActive = activeAnchor === link.anchor;
                return (
                  <Link
                    key={link.anchor}
                    onClick={handleClick(link.anchor)}
                    href={`#${link.anchor}-section`}
                    aria-current={isActive ? "true" : undefined}
                    color={isActive ? "brand.accent" : "brand.body"}
                    borderBottom="1px solid"
                    borderColor={isActive ? "brand.accent" : "transparent"}
                    pb={1}
                    _hover={{ color: "brand.accent", textDecoration: "none" }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </HStack>
          </nav>
        </Stack>
      </Box>
    </Box>
  );
};
export default Header;
