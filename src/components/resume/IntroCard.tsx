import React from 'react';
import QRCode from 'qrcode.react';

function IntroCard() {
  return (
    <div className='intro-card'>
      <a href='https://resume.tory.ir'>
        <QRCode
          className='qrcode'
          level='L'
          // renderAs='svg'
          bgColor='transparent'
          value='https://kord.us.to'
        />
        <span>visit here for updates</span>
      </a>
    </div>
  );
}

export default IntroCard;
