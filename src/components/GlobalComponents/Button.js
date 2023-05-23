/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const redirectWhatsApp = 'https://whatsa.me/5511973616205/?t=Ol%C3%A1!%20Estou%20interessado(a)%20em%20agendar%20minha%20matr%C3%ADcula%20na%20academia.%20Gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20planos%20dispon%C3%ADveis%20e%20agendar%20uma%20visita.%20Aguardo%20seu%20retorno.%20Obrigado(a)!'

const Button = ({ text }) => (
  <a href={redirectWhatsApp} css={styles} className="btn">
    {text}
  </a>
);


const styles = css`
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  padding: 15px 44px;
  background: #009e60;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid transparent;
  transition: all 500ms ease-in-out;
  .btn {
    margin: 40px 0 0 0;
    &:hover {
      background: transparent;
      color: #009e60;
      border: 1px solid #009e60;
    }
  }
`;

export default Button;
