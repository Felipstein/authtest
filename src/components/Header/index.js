import { useContext } from 'react';
import logo from '../../assets/images/logo.svg';
import menuLogo from '../../assets/images/menu.svg';
import { UserContext } from '../../contexts/UserContext';

import { Container } from './styles';

export default function Header() {
  const { name } = useContext(UserContext);

  return (
    <Container>
      <img src={logo} alt="AuthTest Logo" />
      <div className="profile-menu">
        <h1>{name}</h1>
        <img src={menuLogo} alt="Menu Logo" />
      </div>
    </Container>
  );
}
