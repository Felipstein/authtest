import styled from 'styled-components';

export default styled.button`
  background-color: #FFF;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px 40px;

  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 24px;

  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.15);
  transition-property: background-color, color;
  transition: 0.125s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #FFF;
  }

  &:disabled {
    background-color: #DDD;
    color: #AAA;
    border-color: transparent;
    cursor: default;
  }

`;
