import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from '../../assets/theme/global';
import defaultTheme from '../../assets/theme/default';

import Routes from '../../Routes';
import Loader from '../Loader';
import ToastContainer from '../Toast/ToastContainer';
import UserProvider from '../../contexts/UserContext';
import LoaderProvider from '../../contexts/LoaderContext';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <UserProvider>
        <LoaderProvider>
          <ToastContainer />
          <Loader />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </LoaderProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
