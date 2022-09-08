import styled from 'styled-components';

export const Container = styled.button`
  background-color: #D9D9D9 !important;
  border: 1px solid #888 !important;
  border-radius: 5px;
  padding: 10px 20px;

  display: flex;
  flex-direction: row;
  align-items: center;

  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  h2 {
    font-size: 24px;
    font-weight: 600;
  }

  #separator {
    width: 2px;
    height: 40px;
    background-color: #AAA;

    margin: 0 16px;
  }

  img {
    width: 32px;
    height: 32px;
  }

  &:hover {
    background-color: #888 !important;
    color: #fff !important;

    #separator {
      background-color: #666 !important;
    }
  }
`;
