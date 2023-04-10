import { Header } from './components/Header';
import { Global } from './components/styles/Global.styled';
import { Container } from './components/styles/Container.styled';
import { Hero } from './components/Hero';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    gray: '#8a90a2',
    purple: '#5956e9',
    yellow: '#ffd109'
  }
}

function App() {
  return (

    <ThemeProvider theme={theme}>
    <Global>

    <Header />
    
    <Container>
          
        

        <body>
          <Hero/>
        </body>
    
    </Container>
    </Global>
    </ThemeProvider>

  );
}

export default App;
