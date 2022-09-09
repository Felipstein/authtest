import { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BounceLoader } from 'react-spinners';
import { useTransition, animated } from 'react-spring';

import logoWhite from '../../assets/images/logo_white.svg';
import Background from '../Background';
import { LoaderContext } from '../../contexts/LoaderContext';

import { Overlay, Container } from './styles';

export default function Loader() {
  const loader = useContext(LoaderContext);

  const transition = useTransition(loader, {
    from: { y: 1200, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 1200, opacity: 0 },
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!loader.isLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <Background white />
      {transition((style, item) => item && (
        <animated.div style={style}>
          <Overlay />
        </animated.div>
      ))}
      <Container>
        <header>
          <img src={logoWhite} alt="AuthTest Logo" />
        </header>
        <div className="loader">
          <BounceLoader
            color="#fff"
            loading
            size={50}
          />
        </div>
        <footer>
          <h1>CONTE ATÉ 3...</h1>
          <span>2022 Felipe Oliveira</span>
        </footer>
      </Container>
    </>,
    document.getElementById('loader-root'),
  );
}
