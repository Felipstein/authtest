import ReactDOM from 'react-dom';
import ButtonCopy from '../ButtonCopy';

import { Container, Overlay } from './styles';

export default function DiscordModal() {
  function handleClose() {
    console.log('close!');
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <h1>Meu Discord —</h1>
        <ButtonCopy textToCopy="luisfeelip#9418" onCopy={handleClose} />
        <span>(Clique acima para copiar)</span>
        <button id="close" type="button" onClick={handleClose}>Fechar</button>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}
