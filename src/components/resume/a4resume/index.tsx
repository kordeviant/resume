'use client';
import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import IntroCard from '../IntroCard';

function A4resume({ children }) {
  const sheetRef = useRef<any>();

  const print = () => {};
  return (
    <>
      <Button onClick={print}>test</Button>
      <div
        ref={sheetRef}
        className='bgapply'
        id='resume-sheet'
        style={{
          width: '21cm',
          margin: '0 auto',
          marginBlockEnd: 30,
          height: '29.7cm',
          padding: '20px',
          backgroundColor: 'rgba(255,255,255,.8)',
          border: 'none',
          color: '#000',
          cursor: 'default',
        }}
      >
        <IntroCard />
        {children}
      </div>
    </>
  );
}

export default A4resume;
