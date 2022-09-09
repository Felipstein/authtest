import PropTypes from 'prop-types';
import { useContext } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { LoaderContext } from '../../contexts/LoaderContext';
import { UserContext } from '../../contexts/UserContext';
import delay from '../../utils/delay';
import Menus from './Menus';

import { Container, AsideStyled } from './styles';

export default function Home({ history }) {
  const user = useContext(UserContext);
  const loader = useContext(LoaderContext);

  if (!user.isAuth()) {
    history.push('/login');
  }

  async function handleLogout() {
    loader.setIsLoading(true);
    await delay(2000);

    loader.setIsLoading(false);
    user.logout(); // this crash
  }

  return (
    <>
      <Header />
      <Container>
        <button type="button" onClick={handleLogout}>
          Sair
        </button>
        <AsideStyled>
          <Menus />
        </AsideStyled>
      </Container>
      <Footer />
    </>
  );
}

Home.propTypes = {
  history: PropTypes.any.isRequired,
};
