import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { UserContext } from '../../contexts/UserContext';
import Menus from './Menus';

import { Container, AsideStyled } from './styles';

export default function Home({ history }) {
  const [block, setBlock] = useState(true);
  const user = useContext(UserContext);

  const transition = useTransition(block, {
    from: { y: 1200 },
    enter: { y: 0 },
    leave: { y: 1200 },
  });

  useEffect(() => {
    setTimeout(() => {
      setBlock(false);
    }, 2000);
  }, []);

  if (!user.isAuth()) {
    history.push('/login');
  }

  return (
    <>
      <Header />
      <Container>
        {transition((style, item) => item && (
          <animated.div className="panel" style={style}>
            <span>Transition Example</span>
          </animated.div>
        ))}
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
