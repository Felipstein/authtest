import logo from '../../assets/images/logo.svg';
import menuLogo from '../../assets/images/menu.svg';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="AuthTest Logo" />
      <div className="profile-menu">
        <h1>Luís Felipe</h1>
        <img src={menuLogo} alt="Menu Logo" />
      </div>
    </Container>
  );
}
