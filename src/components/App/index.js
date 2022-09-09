import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../assets/theme/global';

import defaultTheme from '../../assets/theme/default';
import Routes from '../../Routes';
import ToastContainer from '../Toast/ToastContainer';
import UserProvider from '../../contexts/UserContext';
import Loader from '../Loader';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <UserProvider>
        <ToastContainer />
        <Loader />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
}
