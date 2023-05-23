/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import FooterCardContainer from "./FooterCardContainer";
import Container from "../GlobalComponents/Container";

const Footer = () => (
  <footer css={styles} id="contact">
    <FooterCardContainer />
    <Container>
      <p>
        Copyright &copy;2023 Todos os direitos | Site criado com {" "}
        <i className="far fa-heart"></i> por{" "}
        <a
          href="https://vdiorio.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vitor Diorio
        </a>
      </p>
    </Container>
  </footer>
);

const styles = css`
  background: #000;
  .container {
    padding: 30px 0;
    border-top: 1px solid #1a1a1a;
    text-align: center;
    p {
      font-size: 15px;
      color: #aab1b7;
      a {
        text-decoration: none;
        color: #009e60;
      }
    }
  }
  @media (max-width: 1200px) {
    .container {
      max-width: 90%;
    }
  }
`;

export default Footer;
