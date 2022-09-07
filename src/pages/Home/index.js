import Header from '../../components/Header';
import Menus from './Menus';

import { Container, AsideStyled } from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <AsideStyled>
          <Menus />
        </AsideStyled>
      </Container>
    </>
  );
}
