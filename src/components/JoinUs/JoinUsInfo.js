/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Button from "../GlobalComponents/Button";

const JoinUsInfo = ({ title }) => (
  <div css={styles} className="cardInfo">
    <h2>{title}</h2>
    <p>
      Transforme sua vida e conquiste a forma física que você sempre desejou. Supere as barreiras e desafios que surgem ao longo do caminho em direção à saúde e bem-estar. Diga adeus às limitações físicas e abrace uma jornada de transformação e superação pessoal. Junte-se a nós e liberte todo o seu potencial para desfrutar de uma vida vibrante e cheia de possibilidades.
    </p>
    <Button text="Agende sua matrícula" />
  </div>
);

const styles = css`
  z-index: 3;
  color: #fff;
  position: relative;
  width: 100%;
  max-width: 380px;
  text-align: center;
  margin: 0 auto;
  h2 {
    font-size: 36px;
    font-weight: 800;
    line-height: 1;
  }
  p {
    font-size: 17px;
    font-weight: 300;
    line-height: 1.6;
    margin: 18px 0 26px 0;
  }
  .btn {
    &:hover {
      background: transparent;
      color: #00FF00;
      border: 1px solid #00FF00;
    }
  }
`;

export default JoinUsInfo;
