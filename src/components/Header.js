import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Stack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: ilyakopturov@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/ilyakop",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ilyakop",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/illia.online/",
  },
  {
    icon: faYoutube,
    url: "https://www.youtube.com/@illia.online",
  },
];

const Header = () => {
  const [scroll, setScroll] = useState(window.scrollY) 
  const [transform, setTramsform] = useState('translateY(0)') 
  
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect( () => {
    const handleScroll = () => {
      if (window.scrollY - scroll > 0) {
        setTramsform('translateY(-200px)')
      }
      if (window.scrollY - scroll < 0) {
        setTramsform('translateY(0)')
      }
      // save scroll to compare with later on 
      setScroll(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scroll])

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={transform}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#221d32"
      boxShadow={'xl'}
      zIndex={9999}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <Stack direction={{ base: 'column', md: 'row' }}
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={18}>
            {socials.map((social) => {
              return <a key={social.url} href={social.url}><FontAwesomeIcon icon={social.icon} size="2x" /></a>
            })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={18}>
              <a onClick={handleClick('projects')} href="/#projects">Projects</a>
              <a onClick={handleClick('resume')} href="/#resume">Resume</a>
              <a onClick={handleClick('contactme')} href="/#contact-me">Contact Me</a>
            </HStack>
          </nav>
        </Stack>
      </Box>
    </Box>
  );
};
export default Header;
