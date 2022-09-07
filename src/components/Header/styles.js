import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;

  width: 100vw;

  padding: 30px 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);

  img {
    width: 224px;
    height: 36px;
  }

  .profile-menu {
    display: flex;
    flex-direction: row;
    align-items: center;

    h1 {
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
      margin-right: 20px;
    }

    img {
      width: 34px;
      height: 24px;
    }
  }

`;
