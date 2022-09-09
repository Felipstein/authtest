import PropTypes from 'prop-types';
import { useContext } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { UserContext } from '../../contexts/UserContext';
import Menus from './Menus';

import { Container, AsideStyled } from './styles';

export default function Home({ history }) {
  const user = useContext(UserContext);

  if (!user.isAuth()) {
    history.push('/login');
  }

  return (
    <>
      <Header />
      <Container>
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
