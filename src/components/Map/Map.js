import React from 'react';
import { css } from '@emotion/core';

function MapComponent() {
  return (

    <div css={styles}>
      <div className='canvas'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1040.2392060726067!2d-46.88165856499281!3d-23.358697921191062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf1f70c00379f7%3A0x562047523240a290!2sSport%20Vip%20Academia!5e0!3m2!1spt-BR!2sbr!4v1684600020196!5m2!1spt-BR!2sbr"
        width="100%"
        height="600"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      />
      </div>
    </div>
  );
}

const styles = css`
`

export default MapComponent;
