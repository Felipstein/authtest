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

    .email {
      margin-bottom: 10px;
    }

    #copy-email {
      cursor: pointer;
      padding-bottom: 2px;
      border-bottom: 2px solid transparent;
      transition: border-color 0.2s ease-in-out;

      &:hover {
        border-color: black;
      }
    }

    #tooltip {
      margin-left: 10px;
      font-size: 14px;
      display: none;
    }

    h3 {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 18px;
    }

    span {
      color: #878A8F;
      font-size: 16px;
      font-weight: 400;
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
      a + a {
        margin-left: 20px;
      }

      a {
        padding-bottom: 1px;
        border-bottom: 2px solid transparent;
        transition: border-color 0.2s ease-in-out;

        &:hover {
          border-color: black;

          img {
            transition: filter 0.2s ease-in-out;
            filter: brightness(0);
          }
        }
      }

    }
  }
`;
