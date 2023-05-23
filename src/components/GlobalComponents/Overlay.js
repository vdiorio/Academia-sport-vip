/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Overlay = () => <div css={styles} className="overlay"></div>;

const styles = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 158, 96, 0.20) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`;

export default Overlay;
