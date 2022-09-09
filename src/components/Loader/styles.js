import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  color: #fff;
  background-color: #0F141E;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    padding: 36px;
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  footer {
    position: absolute;
    bottom: 60px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      color: #fff;
      font-weight: 900;
      font-size: 72px;
      margin-bottom: 150px;
    }

    span {
      font-weight: 300;
      font-size: 20px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;
