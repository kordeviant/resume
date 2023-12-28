"use client"
import jsPDF from 'jspdf';
import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { NavUp } from './NavUp';
import LinkTransition from '@/components/LinkTransition';
import { MyCard } from '@/components/MyCard';
import { Badge } from '@/components/ui/badge';
import { TbHomeMove } from "react-icons/tb";


function A4resume({ children }) {
    const sheetRef = useRef<any>();
    // print html sheetref to pdf using jspdf
    const print = () => {
        const doc = new jsPDF('p', 'mm', [297, 210]);
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

            <div ref={sheetRef} id="resume-sheet" style={{
                width: '21cm',
                height: '29.7cm',
                padding: '20px',
                background: 'rgba(255,255,255,0.4)',

            }}>{children}</div>
        </>
    )
}

export default A4resume