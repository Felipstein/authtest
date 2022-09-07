import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../assets/theme/global';

import defaultTheme from '../../assets/theme/default';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>App</h1>
    </ThemeProvider>
  );
}
