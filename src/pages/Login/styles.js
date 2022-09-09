import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;
  margin: auto;
  margin-top: 40px;

  #my-logo {
    transform: scale(80%);
    margin-bottom: 108px;
  }

  #logo {
    transform: scale(145%);
    margin-bottom: 80px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    margin-bottom: 80px;
  }

`;
