import React from 'react';
import QRCode from 'qrcode.react';

function IntroCard() {
  return (
    <div className='intro-card'>
      <h1>Puria Kordrostami</h1>
      <a href='https://resume.tory.ir'>
        <QRCode
          className='qrcode'
          level='L'
          // renderAs='svg'
          size={100}
          bgColor='transparent'
          value='https://kord.us.to'
        />
        <span>visit here for updates</span>
      </a>
    </div>
  );
}

export default IntroCard;
