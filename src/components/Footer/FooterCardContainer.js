/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const FooterCardContainer = () => (
  <div className="wrap" css={styles}>
    <div className="footerCard">
      <h2>Academia</h2>
      <p>Rua Antônio da Silva Esparrinha, 533<br/>CENTRO - CAJAMAR - SP</p>
      <a href="#/">11 97361-6205</a>
      <a href="mailto:atendimento@academiasportvip.com.br">atendimento@academiasportvip.com.br</a>
      <div className="footerSocials">
        <a href="https://www.facebook.com/academiasportvip/"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/sportvipacademia/"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
    <div className="footerCard">
      <h2>Links</h2>
      <a href="#pricing">Preços</a>
      <a href="#about">Sobre</a>
      <a href="#gallery">Galeria</a>
      <a href="https://whatsa.me/5511973616205">Contato</a>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 140px 0;
  display: flex;
  justify-content: space-between;
  .footerCard {
    width: 100%;
    max-width: 24%;
    color: #aab1b7;
    &:nth-child(2),
    &:nth-child(3) {
      max-width: 28%;
      display: flex;
      flex-direction: column;
      a {
        margin-bottom: 18px;
      }
    }
    &:nth-child(3) {
      p {
        margin: 24px 0 0 0;
      }
    }
    h2 {
      font-size: 24px;
      margin-bottom: 40px;
      color: #009e60;
    }
    p {
      line-height: 1.5;
      margin-bottom: 8px;
    }
    a {
      text-decoration: none;
      display: inline-block;
      color: #aab1b7;
      margin-bottom: 8px;
      transition: color 600ms ease-in-out;
      &:hover {
        color: #009e60;
      }
    }
    .footerSocials {
      width: 100%;
      padding: 40px 0 0 0;
      display: flex;
      align-items: center;
      i {
        margin-right: 30px;
        cursor: pointer;
        transition: color 600ms ease-in-out;
        &:hover {
          color: #009e60;
        }
      }
    }
    .inputWrap {
      display: flex;
      position: relative;
      input {
        padding: 16px 0 16px 16px;
        width: 100%;
        border-radius: 50px;
        border: none;
        outline: none;
      }
      .btn {
        padding: 10px 20px;
        border-radius: 50px;
        position: absolute;
        top: 50%;
        right: 6px;
        transform: translateY(-50%);
        color: #fff;
        font-size: 14px;
        text-transform: capitalize;
      }
    }
  }
  @media (max-width: 640px) {
    flex-direction: column;
    .footerCard {
      max-width: 450px;
      margin-bottom: 40px;
      &:nth-child(2),
      &:nth-child(3) {
        max-width: 450px;
      }
    }
  }
  @media (min-width: 641px) and (max-width: 915px) {
    flex-wrap: wrap;
    .footerCard {
      max-width: 45%;
      &:first-of-type {
        margin-bottom: 40px;
      }
      &:nth-child(2),
      &:nth-child(3) {
        max-width: 45%;
      }
    }
  }
  @media (max-width: 916px) {
    .footerCard {
      p {
        font-size: 14px;
      }
      &:first-of-type {
        display: flex;
        flex-direction: column;
      }
    }
  }
  @media (max-width: 1200px) {
    max-width: 90%;
  }
`;

export default FooterCardContainer;
