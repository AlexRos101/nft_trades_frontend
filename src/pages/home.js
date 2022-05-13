import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../screens/Hero"
import Section from "../screens/Section"
import Testimonial from "../screens/Testimonial"
import ContactUs from "../screens/ContactUs"
import AboutUs from "../screens/AboutUs"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
    },});

function Home(){
    return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <Section />
      <AboutUs />
      <Testimonial />
      <ContactUs />
      <Footer />
      </ThemeProvider>
    </>
  );
}

export default Home;