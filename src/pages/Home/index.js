import { useMemo } from 'react';
import Header from '../../components/Header';
import AsideButton from '../../components/AsideButton';

import accountDataIcon from '../../assets/images/icons/account_data.svg';
import perfilIcon from '../../assets/images/icons/perfil.svg';

import { Container, AsideStyled } from './styles';

export default function Home() {
  const menus = useMemo(() => [
    {
      icon: [accountDataIcon, 'Account Data Icon'],
      text: 'Dados da conta',
    },
    {
      icon: [perfilIcon, 'Perfil Icon'],
      text: 'Meu Perfil',
    },
  ]);

  return (
    <>
      <Header />
      <Container>
        <AsideStyled>
          {menus.map(({ icon, text }) => (
            <AsideButton key={Math.random()}>
              <img src={icon[0]} alt={icon[1]} />
              <span>{text}</span>
            </AsideButton>
          ))}
        </AsideStyled>
      </Container>
    </>
  );
}
