'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navigation = ({ locale, trans }: { locale: string; trans: any }) => {
  const [menuCollapsed, setMenuCollapsed] = useState(true)
  const toggleMenu = () => {
    setMenuCollapsed(!menuCollapsed)
  }

  return (
    <nav className={'flex-1 flex items-start'}>
      <button onClick={toggleMenu} className="block lg:hidden pr-4">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul
        className={`${menuCollapsed ? 'hidden' : 'mb-4'} lg:flex lg:flex-row flex-col text-xl font-bold flex-wrap items-center justify-center gap-10 capitalize`}
      >
        <li>
          <Link href={`/${locale}`}>{trans.home}</Link>
        </li>
        <li>
          <Link href={`/${locale}/pages/about`}>{trans.company}</Link>
        </li>
        <li>
          <Link href={`/${locale}/products`}>{trans.products}</Link>
        </li>
        <li>
          <Link href="#">{trans.contact}</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
