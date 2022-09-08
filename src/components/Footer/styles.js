import styled from 'styled-components';

export const Container = styled.footer`
  max-width: 1100px;
  margin: auto;

  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    border-top: 1px solid #AAA;
    padding: 45px 0;

    h3 {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 18px;
    }

    span {
      color: #878A8F;
      font-size: 16px;
      font-weight: 400;

      & + span {
        margin-top: 8px;
      }
    }

    strong {
      color: black;
      font-weight: 400;
    }

    .contact {
      display: flex;
      flex-direction: column;
    }

    .network nav {
      img + img {
        margin-left: 20px;
      }
    }
  }
`;
