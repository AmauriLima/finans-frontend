import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';
import Routes from '../../Routes';

import { AuthProvider } from '../../Context/AuthContext';

import { Container } from './styles';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Header />
          <Container>
            <Routes />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
