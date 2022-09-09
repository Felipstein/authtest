import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BounceLoader } from 'react-spinners';

import logoWhite from '../../assets/images/logo_white.svg';
import Background from '../Background';

import { Overlay } from './styles';

export default function Loader() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <Background white />
      <Overlay>
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
      </Overlay>
    </>,
    document.getElementById('loader-root'),
  );
}
