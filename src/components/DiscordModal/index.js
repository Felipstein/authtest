import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import toast from '../../utils/toast';
import ButtonCopy from '../ButtonCopy';

import { Container, Overlay } from './styles';

export default function DiscordModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  function handleClose(hasCopied) {
    if (hasCopied) {
      toast('Discord TAG copiado!', 2500);
    }

    onClose();
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <h1>Meu Discord —</h1>
        <ButtonCopy textToCopy="luisfeelip#9418" onCopy={() => handleClose(true)} />
        <span>(Clique acima para copiar)</span>
        <button id="close" type="button" onClick={() => handleClose(false)}>Fechar</button>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}
