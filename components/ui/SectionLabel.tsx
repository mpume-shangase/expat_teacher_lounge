import React from 'react'

interface SectionLabelProps {
  children: React.ReactNode
  light?: boolean
}

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <p className={`
      text-[11px] font-bold tracking-[0.08em] uppercase mb-3 font-body
      ${light ? 'text-[#FCCB52]' : 'text-[#1C91D7]'}
    `}>
      {children}
    </p>
  )
}
