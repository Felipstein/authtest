import styled from 'styled-components';

export default styled.input`
  background-color: #EEE;
  outline: 0;
  border: 1px solid transparent;
  padding: 12px 15px;
  font-size: 20px;
  color: #222;
  font-weight: 500;
  border-radius: 5px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.15);
  transition-property: color, border-color, background-color;
  transition: 0.2s ease-in-out;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3)
  }

  &:hover, &:focus {
    color: #000;
    border-color: #000;
    background-color: #FFF;
  }

`;
