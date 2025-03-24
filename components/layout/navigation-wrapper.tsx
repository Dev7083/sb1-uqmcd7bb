"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Navbar from './navbar'

export function NavigationWrapper() {
  const pathname = usePathname()
  const isAmityPage = pathname === '/apply/amity-university'

  if (isAmityPage) return null
  return <Navbar />
}