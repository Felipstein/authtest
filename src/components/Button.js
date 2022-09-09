import styled from 'styled-components';

export default styled.button`
  cursor: pointer;
  background-color: #FFF;
  padding: 15px 119px;
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid #000;
  border-radius: 5px;
  outline: 0;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.1);
  transition-property: background-color, color;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #000;
    color: #FFF;
  }
`;
