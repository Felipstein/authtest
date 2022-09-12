import { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import myLogo from '../../assets/images/my-logo.svg';

import Background from '../../components/Background';
import Input from '../../components/Input';
import Button from '../../components/Button';

import isEmailValid from '../../utils/isEmailValid';

import { Container } from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = Boolean(email && isEmailValid(email) && password);

  function handleSubmit(event) {
    event.preventDefault();

    console.log('submit');
  }

  return (
    <Container>
      <Background />
      <img id="my-logo" src={myLogo} alt="Felipe Oliveira Logo" />
      <img id="logo" src={logo} alt="AuthTest Logo" />
      <form className="login-form" onSubmit={handleSubmit}>
        <Input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          value={password}
          type="password"
          placeholder="Senha"
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className="actions">
          <Button type="submit" disabled={!isFormValid}>Vamos lá!</Button>
        </div>
      </form>
    </Container>
  );
}
