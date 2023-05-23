/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import Title from "../GlobalComponents/Title";
import FeaturesCard from "./FeaturesCard";
import IconOne from "../Images/iconOne.svg";
import IconTwo from "../Images/iconTwo.svg";
import IconThree from "../Images/iconThree.svg";
import IconFour from "../Images/iconFour.svg";

const Features = () => (
  <section css={styles} className="features" id="about">
    <Title
      title="NOSSOS SERVIÇOS"
      desc="Mantemos nossas máquinas atualizadas e preparadas para atender sua necessidade de musculação."
    />
    <Container>
      <FeaturesCard cardImg={IconOne} cardTitle={0} />
      <FeaturesCard cardImg={IconTwo} cardTitle={1} />
      <FeaturesCard cardImg={IconThree} cardTitle={2} />
      <FeaturesCard cardImg={IconFour} cardTitle={3} />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 170px 0;
  background: #000;
  .container {
    display: flex;
    padding: 80px 0 0 0;
  }
  @media (max-width: 579px) {
    .title {
      padding: 0 40px;
    }
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 580px) and (max-width: 1000px) {
    .title {
      padding: 0 40px;
    }
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 640px;
    }
  }
`;

export default Features;
