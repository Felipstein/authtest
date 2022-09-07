import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  top: 132px;

  width: 75vw;
  max-width: 1360px;
  margin: auto;

  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.1);

  overflow: hidden;
`;

export const AsideStyled = styled.aside`
  background-color: #EEE;
  width: 210px;
  border-right: 1px solid black;
  padding: 14px 0;
`;

export const Separator = styled.div`
  background: #AAA;
  width: ${({ width }) => width};
  height: 1px;
  margin: 10px auto;
`;

export const Menu = styled.div`

`;
