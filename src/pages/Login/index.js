import { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import Background from '../../components/Background';

import myLogo from '../../assets/images/my_logo.svg';
import logo from '../../assets/images/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { UserContext } from '../../contexts/UserContext';
import delay from '../../utils/delay';

import { LoaderContext } from '../../contexts/LoaderContext';

export default function Login({ history }) {
  const [inputName, setInputName] = useState('');
  const user = useContext(UserContext);
  const loader = useContext(LoaderContext);

  async function handleSubmit(event) {
    event.preventDefault();

    loader.setIsLoading(true);
    await delay(2000);

    loader.setIsLoading(false);
    user.setName(inputName);
    history.push('/');
  }

  function onInputNameChange(event) {
    const { value } = event.target;

    setInputName(value);
  }

  if (user.isAuth()) {
    history.push('/');
  }

  return (
    <>
      <Background />
      <Container>
        <img id="my-logo" src={myLogo} alt="Felipe Oliveira Logo" />
        <img id="logo" src={logo} alt="AuthTest Logo" />
        <form onSubmit={handleSubmit}>
          <Input
            value={inputName}
            type="text"
            placeholder="Nome"
            onChange={onInputNameChange}
          />
          <Button type="submit">
            Vamos lá!
          </Button>
        </form>
      </Container>
    </>
  );
}

Login.propTypes = {
  history: PropTypes.any.isRequired,
};
