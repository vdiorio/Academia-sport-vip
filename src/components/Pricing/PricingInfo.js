/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Button from "../GlobalComponents/Button";

const PricingInfo = () => (
  <div css={styles} className="pricingInfo">
    <p>Acesso ilimitado</p>
    <p>Suporte do treinador</p>
    <p>Armario + Banheiro</p>
    <Button text="AGENDE SUA MATRÍCULA" />
  </div>
);

const styles = css`
  padding-top: 30px;
  p {
    color: #fff;
    font-size: 15px;
    margin-bottom: 26px;
    &:nth-child(3),
    &:nth-child(4) {
      color: #7a838b;
    }
  }
  .btn {
    margin: 20px 0 0 0;
    &:hover {
      background: transparent;
      color: #00FF00;
      border: 1px solid #00FF00;
    }
  }
`;

export default PricingInfo;
