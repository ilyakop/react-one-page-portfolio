import { ChakraProvider, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <Box bgGradient='linear(to-t, #3c1053, #ad5389)'>
            <LandingSection />
          </Box>
          <Box bgGradient='linear(to-t, #3c1053, #3c1053)'>
            <ProjectsSection />
          </Box>
          <Box bgGradient='linear(to-t, #ad5389, #3c1053)'>
            <ResumeSection />
          </Box>
          <Box bgGradient='linear(to-t, #3c1053, #ad5389)'>
            <ContactMeSection />
          </Box>
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
