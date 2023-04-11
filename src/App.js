import  Header  from './components/Header'
import GlobalStyles from './components/styles/Global.styled';
import { Container } from './components/styles/Container.styled';
import  Hero  from './components/Hero';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    gray: '#8a90a2',
    purple: '#5956e9',
    yellow: '#FFD93D',
    orange: '#FF8400',
    brown: '#4F200D'
  }
}

function App() {
  return (

    <>
    <ThemeProvider theme={theme}>
    <GlobalStyles />

    <Header />
    
    <Container>

      <Hero/>

    </Container>

    </ThemeProvider>
    </>

  );
}

export default App;
