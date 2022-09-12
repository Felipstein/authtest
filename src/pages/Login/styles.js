import styled from 'styled-components';

export const Container = styled.div`
  width: 450px;
  margin: auto;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img#my-logo {
    width: 302px;
    height: 43px;
    margin-bottom: 80px;
  }

  img#logo {
    width: 402px;
    height: 57px;
    margin-bottom: 60px;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    input {
      width: 80%;

      & + input {
        margin-top: 24px;
      }
    }

    .actions {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-top: 36px;

      button {
        width: 80%;

        & + button {
          margin-top: 24px;
        }
      }
    }
  }
`;
