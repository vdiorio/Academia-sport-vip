/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PricingTitle from "./PricingTitle";
import PricingInfo from "./PricingInfo";

const PricingCard = ({ level, price, avulso }) => (
  <div css={styles} className="pricingCard">
    <PricingTitle level={level} price={price} avulso={avulso} />
    <PricingInfo />
  </div>
);

const styles = css`
  width: 30%;
  max-width: 80%;
  padding: 40px 10px;
  background: #1a1a1a;
  border: 1px solid transparent;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: border 600ms ease-in-out;
  &:hover {
    border: 1px solid #00FF00;
  }
  @media (max-width: 799px) {
    min-width: 328px;
    width: 80% !important;
    margin-bottom: 26px;
  }
  @media(min-width: 800px) and (max-width: 1189px) {
    max-width: 48%;
    margin-bottom: 26px;
  }
`;

export default PricingCard;
