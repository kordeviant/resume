"use client"
import jsPDF from 'jspdf';
import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'

function A4resume() {
    const sheetRef = useRef<any>();
    // print html sheetref to pdf using jspdf
    const print = () => {
        const doc = new jsPDF('p', 'mm', [297, 210], true);
        doc.html(sheetRef.current, {
            callback: function (doc) {
                doc.save('A4resume.pdf');
            },
            x: 0,
            y: 0,
            width: 210, //target width in the PDF document
            windowWidth: 795, //width of the window that the HTML is rendered in
        });
    }
    return (
        <>
            <Button onClick={print}>print</Button>

            <div ref={sheetRef} id="resume-sheet" style={{
                width: '21cm',
                height: '29.7cm',
                padding: '20px',
                background: 'lightblue'
            }}>A4resume</div>
        </>
    )
}

export default A4resume