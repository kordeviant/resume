"use client"
import LinkTransition from '@/components/LinkTransition'
import { NavUp } from '@/components/resume/a4resume/NavUp'
import { Card } from '@/components/ui/card'
import React from 'react'
import { TbHomeMove } from 'react-icons/tb'

function layout({ children }) {
  return (
    <>


      <NavUp />
      {children}
    </>
  )
}

export default layout