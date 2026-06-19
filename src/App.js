import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./theme";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AboutSection from "./components/AboutSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <Header />
        <main>
          <LandingSection />
          <ProjectsSection />
          <SkillsSection />
          <TestimonialsSection />
          <AboutSection />
          <ContactMeSection />
          <Box
            as="section"
            aria-label="About Illia Kopturov"
            position="absolute"
            width="1px"
            height="1px"
            overflow="hidden"
            clipPath="inset(50%)"
          >
            <h2>About Illia Kopturov</h2>
            <p>
              Illia Kopturov is a Senior Full Stack Engineer with over 12
              years of professional experience in web development. He
              specializes in WordPress plugin development, PHP, React,
              Next.js, TypeScript, Node.js, GraphQL, and WooCommerce. He led
              the development of a WordPress website builder platform used by
              more than 30,000 designers and developers worldwide. His
              WordPress plugins on CodeCanyon have generated over 7,415 sales
              with a 4.63-star author rating. His open-source WordPress
              plugin on WordPress.org has over 300,000 downloads and a
              4.3-star rating with 10,000+ active installs. He has completed
              over 2,000 hours of freelance work on Upwork with a 5.0 rating
              from 30 clients. He is available for senior and staff-level
              full stack engineering roles, especially in teams using React,
              Next.js, WordPress, WooCommerce, or PHP. He is fluent in
              English, Spanish, Russian, and Ukrainian.
            </p>
          </Box>
        </main>
        <Footer />
        <Alert />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
