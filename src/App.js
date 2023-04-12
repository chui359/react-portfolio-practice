import  Header  from './components/Header'
import GlobalStyles from './components/styles/Global.styled';
import { Container } from './components/styles/Container.styled';
import  Hero2  from './components/Hero2';
import { ThemeProvider } from 'styled-components';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';

const theme = {
  colors: {
    gray: '#8a90a2',
    purple: '#5956e9',
    yellow: '#FFD93D',
    orange: '#FF8400',
    brown: '#4F200D',
    black: 'linear-gradient(to bottom, red 0%, yellow 100%);'
  }
}

function App() {
  return (

    <>
    <ThemeProvider theme={theme}>
    <GlobalStyles />

    <Header />
    
    

    <Hero2/>
    <Portfolio/>
    <AboutMe/>


    

    </ThemeProvider>
    </>

  );
}

export default App;
