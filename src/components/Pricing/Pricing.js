/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";
import PricingCard from "./PricingCard";

const Pricing = () => (
  <section css={styles} className="pricing" id="pricing">
    <Title
      title="NOSSOS PREÇOS"
      desc="Tentamos manter a academia acessível, nosso principal objetivo é a sua saude."
    />
    <Container>
      <PricingCard level="Treino Avulso" price="15" avulso />
      <PricingCard level="MENSAL" price="90" />
      <PricingCard level="TRIMESTRAL" price="75" />
      <PricingCard level="SEMESTRAL" price="60" />
      <PricingCard level="ANUAL" price="55" />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 140px 0;
  background: #000;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 0 0 0;
    gap: 1vw;
    width: 90% !important;
  }
  @media (max-width: 650px) {
    .title {
      padding: 0 40px;
    }
  }
  @media (max-width: 799px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 800px) and (max-width: 1189px) {
    .container {
      max-width: 90%;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 1190px) {
    .container {
      max-width: 90%;
    }
  }
`;

export default Pricing;
