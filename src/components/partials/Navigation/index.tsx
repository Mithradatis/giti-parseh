'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa6'

const Navigation = ({ locale, trans }: { locale: string; trans: any }) => {
  const [menuCollapsed, setMenuCollapsed] = useState(true)
  const toggleMenu = () => {
    setMenuCollapsed(!menuCollapsed)
  }

  return (
    <nav className={'flex-1 flex items-start'}>
      <button onClick={toggleMenu} className="block lg:hidden pr-4">
        <FaBars />
      </button>
      <ul
        className={`${menuCollapsed ? 'hidden' : 'mb-4'} lg:flex lg:flex-row flex-col text-xl font-bold flex-wrap items-center justify-center gap-10 capitalize`}
      >
        <li>
          <Link href={`/${locale}`} aria-label={trans.home}>{trans.home}</Link>
        </li>
        <li>
          <Link href={`/${locale}/pages/about`} aria-label={trans.company}>{trans.company}</Link>
        </li>
        <li>
          <Link href={`/${locale}/products`} aria-label={trans.products}>{trans.products}</Link>
        </li>
        <li>
          <Link href="#" aria-label={trans.contact}>{trans.contact}</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
