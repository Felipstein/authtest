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

      position: relative;
      display: inline-block;

      .tooltip {
        display: flex;
        flex-direction: row;
        align-items: center;

        width: 172px;
        background-color: #fff;
        border: 1px solid #888;
        border-radius: 5px;
        padding: 5px 10px;
        color: black;
        box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
        font-size: 14px;
        font-weight: 500;
        user-select: none;

        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 80%;
        margin-left: -60px;

        visibility: hidden;
        opacity: 0;
        transition-property: opacity, visibility;
        transition: 0.3s ease-in-out;

        &::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -5px;
          border: 5px solid;
          border-color: #888 transparent transparent transparent;
        }

        img {
          margin-right: 5px;
          width: 16px;
          height: 16px;
        }

      }

      &:hover .tooltip {
        visibility: visible;
        opacity: 1;
      }
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
