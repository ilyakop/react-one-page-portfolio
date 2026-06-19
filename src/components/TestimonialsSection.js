import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CardWrapper from "./CardWrapper";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

const testimonials = [
  {
    quote:
      "He clearly communicated what he was going to do, how he was going to do it, and executed with efficiency. I was having issues with my OAuth removing headers due to...",
    context: "Senior WordPress Developer — OAuth / WooCommerce / Auth Cookies",
  },
  {
    quote:
      "Ilya is extremely professional, perfect communication, excellent code results, and always a pleasure working with him. Looking forward to new projects with him! All the best.",
    context: "E-commerce / Shopping Page Development",
  },
  {
    quote:
      "I give Ilya the highest recommendation. His abilities are surpassed only by his dedication to the project. He has always been quick to start and the job is done right...",
    context: "Full Website — WordPress Design & Development",
  },
  {
    quote:
      "Ilya has been one of the best contractors we have worked with on oDesk. We look forward to working with him again in the future.",
    context: "Web Development Agency",
  },
  {
    quote:
      "Ilya did a fantastic job. He was easy to work with, professional, and his work exceeded my expectations. We will be using him for future projects, no doubt.",
    context: "WordPress Plugin Development — Custom Loan Calculator",
  },
];

const Stars = () => (
  <HStack spacing={1} color="brand.accent" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <FontAwesomeIcon key={i} icon={faStar} size="xs" />
    ))}
  </HStack>
);

const TestimonialsSection = () => {
  const { ref, style } = useScrollFadeIn();

  return (
    <FullScreenSection id="testimonials-section" alignItems="flex-start" p={8}>
      <Box ref={ref} style={style} w="100%" display="flex" flexDirection="column" gap={8}>
      <Heading as="h2" fontFamily="heading" fontSize={{ base: "3xl", md: "4xl" }} pt={8}>
        Client Reviews
      </Heading>
      <HStack align="baseline" spacing={3} fontFamily="heading">
        <Text fontSize="4xl" fontWeight="bold" color="brand.accent" letterSpacing="-0.02em">
          5.0★
        </Text>
        <Text fontFamily="mono" fontSize="sm" color="brand.muted">
          30 reviews on Upwork
        </Text>
      </HStack>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(1,minmax(0,1fr))", md: "repeat(2,minmax(0,1fr))" }}
        gridGap={6}
        alignItems="stretch"
        w="100%"
      >
        {testimonials.map((t, i) => (
          <CardWrapper as="article" key={i} p={6} h="100%">
            <VStack align="left" spacing={3} h="100%">
              <Stars />
              <Text fontStyle="italic" fontSize="md" color="brand.body">
                “{t.quote}”
              </Text>
              <Text fontFamily="mono" fontSize="xs" color="brand.muted">
                {t.context}
              </Text>
              <Text fontFamily="mono" fontSize="xs" color="brand.muted" mt="auto" pt={2}>
                via Upwork
              </Text>
            </VStack>
          </CardWrapper>
        ))}
      </Box>
      </Box>
    </FullScreenSection>
  );
};

export default TestimonialsSection;
