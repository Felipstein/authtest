import { Container } from './styles';

import Background from '../../components/Background';

import myLogo from '../../assets/images/my_logo.svg';
import logo from '../../assets/images/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Background />
      <Container>
        <img id="my-logo" src={myLogo} alt="Felipe Oliveira Logo" />
        <img id="logo" src={logo} alt="AuthTest Logo" />
        <form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Nome" />
          <Button type="submit">
            Vamos lá!
          </Button>
        </form>
      </Container>
    </>
  );
}
