import  Header  from './components/Header'
import GlobalStyles from './components/styles/Global.styled';
import { Container } from './components/styles/Container.styled';
import  Hero3  from './components/Hero3';
import { ThemeProvider } from 'styled-components';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const theme = {
  colors: {
    gray: '#8a90a2',
    purple: '#5956e9',
    yellow: '#FFD93D',
    orange: '#FF8400',
    brown: '#4F200D',
    light: '#FFF9E8'
  }
}

function App() {
  return (

    <>
    <ThemeProvider theme={theme}>
    <GlobalStyles />

    <Header />
    <Hero3/>
    <Portfolio/>
    <AboutMe/>
    <Contact/>

    </ThemeProvider>
    </>

  );
}

export default App;
