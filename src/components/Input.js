import styled from 'styled-components';

export default styled.input`
  background-color: #FBFBFB;
  outline: 0;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  width: 357px;
  color: #444;

  padding: 12px 18px;

  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.1);
  transition-property: border-color, color;
  transition: 0.2s ease-in-out;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-weight: 400;
  }

  &:hover, &:focus {
    color: ${({ theme }) => theme.colors.text};
    border-color: #000;
  }
`;
