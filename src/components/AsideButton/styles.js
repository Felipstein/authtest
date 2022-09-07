import styled from 'styled-components';

export const Container = styled.div`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;

    padding: 8px 26px;
    text-decoration: none;

    color: ${({ theme, danger }) => (danger ? theme.colors.danger : theme.colors.text)};
    font-weight: 500;

    background-color: ${({ selected }) => (selected ? '#CCC' : '#0000000')};

    &:hover {
      background-color: ${({ selected }) => (selected ? '#AAA' : '#CCC')};
    }
  }

`;
