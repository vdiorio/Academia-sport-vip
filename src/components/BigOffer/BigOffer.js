/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import BigOfferInfo from "./BigOfferInfo";
import offerBg from "../Images/offerBg.png";

const BigOffer = () => (
  <section css={styles} className="bigOffer">
    <Container>
      <BigOfferInfo />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 200px 0;
  background: url('${offerBg}') no-repeat center/cover;
  .container {
    display: flex;
    justify-content: flex-end;
  }
  @media(max-width: 1250px) {
    background: url('${offerBg}') no-repeat left/cover;
    .container{
      justify-content: center;
      max-width: 90%;
    }
  }
`;

export default BigOffer;
