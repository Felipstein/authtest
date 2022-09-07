import Header from '../../components/Header';
import AsideButton from '../../components/AsideButton';

import accountDataIcon from '../../assets/images/icons/account_data.svg';
import perfilIcon from '../../assets/images/icons/perfil.svg';

import { Container, AsideStyled } from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <AsideStyled>
          <AsideButton>
            <img src={accountDataIcon} alt="Account Data Icon" />
            <span>Dados da conta</span>
          </AsideButton>

          <AsideButton>
            <img src={perfilIcon} alt="Perfil Icon" />
            <span>Meu perfil</span>
          </AsideButton>
        </AsideStyled>
      </Container>
    </>
  );
}
