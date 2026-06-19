import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Text } from "@chakra-ui/react";
import Card from "./Card";
import PluginCard from "./PluginCard";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

const workFeatured = [
  {
    title: "Oxygen Builder",
    url: "https://oxygenbuilder.com",
    description:
      "Led architecture and development of a WordPress website builder used by 30,000+ designers and agencies worldwide. Engineered to be dramatically leaner and faster than Elementor and Divi — consistently 95%+ on PageSpeed, YSlow, and GTmetrix.",
    getImageSrc: () => require("../images/oxygenbuilder.png"),
    tags: ["PHP", "WordPress", "JavaScript", "React", "REST API", "UI/UX"],
  },
  {
    title: "Ayuda — Services Marketplace",
    url: "https://ayuda.shop",
    description:
      "Built a marketplace connecting professionals with clients across Latin America — Airbnb-style UX for home and personal services.",
    getImageSrc: () => require("../images/ayuda.png"),
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "New York Real Estate Portal",
    url: "https://ipg-nyc-client.vercel.app",
    description:
      "Transformed a static property website into a fully content-managed listing platform for a New York property group.",
    getImageSrc: () => require("../images/ipgnyc.png"),
    tags: ["Vue", "Nuxt.js", "TypeScript", "Sanity CMS"],
  },
];

const workSecondary = [
  {
    title: "Headless WordPress CMS",
    url: "https://headless-wordpress-nextjs-dusky.vercel.app",
    description:
      "Architected a headless WordPress setup fully decoupled from the frontend — content consumable via API across multiple platforms.",
    getImageSrc: () => require("../images/headless-wordpress-cms.png"),
    tags: ["WordPress", "Next.js", "GraphQL", "Vercel"],
  },
  {
    title: "Car Rentals Service",
    url: "https://car-rentals-cancun.com",
    description:
      "Booking and transfer service for car rentals in Cancun and Riviera Maya — built for a high-intent conversion flow with a clean, fast UX.",
    getImageSrc: () => require("../images/cheap-car-rentals.png"),
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Codecademy Translation",
    url: "https://codecademy.com",
    description:
      "Translated JavaScript lessons from English to Russian for Codecademy, an online platform teaching programming to millions of learners.",
    getImageSrc: () => require("../images/codecademy.png"),
    tags: ["JavaScript", "Technical Translation"],
  },
  {
    title: "Google Ranking Service",
    description:
      "Minimalist Google rank-tracking service for monitoring keyword positions across search results.",
    getImageSrc: () => require("../images/knowmyrankings.png"),
    tags: ["PHP", "WordPress", "Google API", "JavaScript"],
  },
];

const pluginRows = [
  [
    {
      title: "Smart Grid Gallery",
      platform: "CodeCanyon",
      description:
        "Responsive, Gutenberg-optimized WordPress gallery plugin — clean grid layouts with lightbox support.",
      primaryStat: "2,493 sales",
      secondaryStat: "81 ratings",
      rating: "4.63",
      tags: ["PHP", "WordPress", "JavaScript", "Gutenberg"],
      url: "https://codecanyon.net/item/smart-grid-gallery-responsive-wordpress-gallery-plugin/8365014",
    },
    {
      title: "Smart Product Viewer — 360° Animation",
      platform: "CodeCanyon",
      description:
        "WooCommerce plugin that lets shoppers spin products through a full 360° interactive view, replacing static product images.",
      primaryStat: "2,382 sales",
      secondaryStat: "66 ratings",
      rating: "4.67",
      tags: ["PHP", "WordPress", "WooCommerce", "JavaScript"],
      url: "https://codecanyon.net/item/smart-product-viewer-360-animation-plugin/6277697",
    },
  ],
  [
    {
      title: "Smart Before After Viewer",
      platform: "CodeCanyon",
      description:
        "Image comparison plugin with a drag-to-reveal slider — used by photographers, agencies, and renovation companies.",
      primaryStat: "1,994 sales",
      secondaryStat: "61 ratings",
      rating: "4.6",
      tags: ["PHP", "WordPress", "JavaScript"],
      url: "https://codecanyon.net/item/smart-before-after-viewer/7672815",
    },
    {
      title: "Simple Like Page",
      platform: "WordPress.org",
      description:
        "Privacy-first Facebook Page embed plugin that delays script loading until user interaction — protects Core Web Vitals.",
      primaryStat: "10,000+ active installs",
      secondaryStat: null,
      rating: "4.3",
      tags: ["PHP", "WordPress", "Gutenberg", "Performance", "Privacy"],
      url: "https://wordpress.org/plugins/simple-facebook-plugin/",
    },
  ],
];

const ProjectsSection = () => {
  const { ref, style } = useScrollFadeIn();

  return (
    <FullScreenSection id="projects-section" alignItems="flex-start" p={8}>
      <Box ref={ref} style={style} w="100%" display="flex" flexDirection="column" gap={10}>
      <Heading as="h2" fontFamily="heading" fontSize={{ base: "3xl", md: "4xl" }} pt={8}>
        Projects
      </Heading>

      <Box>
        <Heading as="h3" fontFamily="heading" fontSize="xl" pb={4} color="brand.muted">
          Work
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns={{ base: "repeat(1,minmax(0,1fr))", md: "repeat(3,minmax(0,1fr))" }}
          gridGap={8}
          mb={8}
        >
          {workFeatured.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              tags={project.tags}
              description={project.description}
              imageSrc={project.getImageSrc()}
              url={project.url}
            />
          ))}
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{ base: "repeat(1,minmax(0,1fr))", md: "repeat(4,minmax(0,1fr))" }}
          gridGap={6}
        >
          {workSecondary.map((project) => (
            <Card
              key={project.title}
              size="small"
              title={project.title}
              tags={project.tags}
              description={project.description}
              imageSrc={project.getImageSrc()}
              url={project.url}
            />
          ))}
        </Box>
      </Box>

      <Box>
        <Heading as="h3" fontFamily="heading" fontSize="xl" pb={4} color="brand.muted">
          Plugins
        </Heading>
        <Text color="brand.muted" fontSize="sm" pb={4} maxW="640px">
          Independent WordPress products designed and built by Illia Kopturov.
        </Text>
        <Box display="flex" flexDirection="column" gap={8}>
          {pluginRows.map((row, i) => (
            <React.Fragment key={i}>
              {i > 0 && <Box borderTop="1px solid" borderColor="brand.border" />}
              <Box
                display="grid"
                gridTemplateColumns={{ base: "repeat(1,minmax(0,1fr))", md: "repeat(2,minmax(0,1fr))" }}
                gridGap={6}
                alignItems="stretch"
              >
                {row.map((plugin) => (
                  <PluginCard key={plugin.title} {...plugin} />
                ))}
              </Box>
            </React.Fragment>
          ))}
        </Box>
      </Box>
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
