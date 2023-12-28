"use client"
import LinkTransition from '@/components/LinkTransition'
import { NavUp } from '@/components/resume/a4resume/NavUp'
import { Card } from '@/components/ui/card'
import React from 'react'
import { TbHomeMove } from 'react-icons/tb'

function layout({ children }) {
  return (
    <>
      <div style={{
        width: '21cm', margin: '0 auto', marginBottom: 30, position: 'relative'
      }}>

        <NavUp />
        {children}
      </div>
    </>
  )
}

export default layout