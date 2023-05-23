/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Button from "../GlobalComponents/Button";

const BigOfferInfo = () => (
  <div css={styles} className="info">
    <h3>
      ESCOLHA NOSSO PLANO<br /> ANUAL E GANHE ATÉ
    </h3>
    <h2>40% Off</h2>
    <p>
      Pague em até 12x<br/>Consulte nossos preços e venha visitar a academia.
    </p>
    <Button text="Agende sua matrícula" />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 560px;
  color: #fff;
  h3 {
    font-size: 42px;
    font-weight: 900;
    line-height: 1.3;
  }
  h2 {
    font-size: 80px;
    font-weight: 500;
    line-height: 1;
    color: #00FF00;
    margin: 20px 0 24px 0;
  }
  p {
    line-height: 1.7;
  }
  .btn {
    margin: 40px 0 0 0;
    &:hover {
      background: transparent;
      color: #00FF00;
      border: 1px solid #00FF00;
    }
  }
  @media (max-width: 800px) {
    p {
      font-size: 16px;
      br {
        display: none;
      }
    }
  }
`;

export default BigOfferInfo;
