import ReactDOM from 'react-dom';

import { Container, Overlay } from './styles';

export default function DiscordModal() {
  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <h1>AA</h1>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}
