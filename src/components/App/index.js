import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../assets/theme/global';

import defaultTheme from '../../assets/theme/default';
import Routes from '../../Routes';
import ToastContainer from '../Toast/ToastContainer';
import DiscordModal from '../DiscordModal';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ToastContainer />
      <DiscordModal />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
