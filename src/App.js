
import GlobalStyles from './components/styles/Global.styled';
import { Container } from './components/styles/Container.styled';
import  Hero  from './components/Hero';
import { ThemeProvider } from 'styled-components';
import NavMenu from './components/NavMenu';
import About from './components/About';
import Skill from './components/Skill';
import Portfolio2 from './components/Portfolio2';

const theme = {
  colors: {
    first: '#57b2e0',
    second: '',
    alt: '#439ecb',
    light: '#b6e4fc',
    title: '#232729',
    text: '#6a767c',
    light_text: '#9fa8ad',
    input: '#eef7fc',
    body: '#fbfdfe',
    gray: '#8a90a2',
    purple: '#5956e9',
    yellow: '#FFD93D',
    orange: '#FF8400',
    brown: '#4F200D',
  }
}

function App() {
  return (
    <>
    
    <ThemeProvider theme={theme}>
    <GlobalStyles />

    <NavMenu />
    <Hero/>
    <About/>
    <Skill/>
    <Portfolio2/>
   
    </ThemeProvider>
    </>

  );
}

export default App;
