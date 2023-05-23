/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Button from "../GlobalComponents/Button";

const MainInfo = () => (
  <div css={styles} className="mainInfo">
    <h3>Construa seu</h3>
    <h1>Corpo dos sonhos</h1>
    <p>Aprimore seu corpo e condicionamento físico com um toque profissional.</p>
    <Button text="Agende sua matrícula" />
  </div>
);

const styles = css`
  h3 {
    font-size: 43px;
    font-weight: 800;
    line-height: 1;
    text-transform: uppercase;
  }
  h1 {
    font-size: 100px;
    font-weight: 900;
    line-height: 1;
    margin: 24px 0;
    text-transform: uppercase;
  }
  p {
    font-size: 21px;
  }
  .btn {
    margin: 32px 0 0 0;
    padding: 15px 50px;
    &:hover {
      background: transparent;
      color: #75d4ab;
      border: 1px solid #75d4ab;
    }
  }
  @media (max-width: 640px) {
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 18px;
    }
  }
  @media (min-width: 641px) and (max-width: 965px) {
    h1 {
      font-size: 80px;
    }
  }
`;

export default MainInfo;
