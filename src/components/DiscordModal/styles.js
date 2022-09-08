import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: #FFF;
  border-radius: 10px;
  padding: 20px 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
  }

  span {
    font-size: 14px;
    color: #888;
    margin-top: 16px;
    margin-bottom: 24px;
    user-select: none;
  }

  button {
    background: none;
    outline: 0;
    border: none;
    border-bottom: 2px solid transparent;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    transition-property:  border, border-color;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      border-color: black;
      color: black;
    }
  }

`;
