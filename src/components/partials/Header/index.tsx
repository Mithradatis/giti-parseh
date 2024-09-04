import React from 'react'
import Logo from '@/assets/images/logo.png'
import OptimizedImage from '@/components/elements/OptimizedImage'
import Link from 'next/link'
import Navigation from '@/components/partials/Navigation'
import Social from '@/components/elements/Social'
import { FaCartShopping } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'

const Header = ({ locale, trans }: { locale: string; trans: any }) => {
  const currentPath = `/${locale}`

  return (
    <header className={'p-5'}>
      <div
        className={
          'container flex flex-wrap items-center md:justify-between justify-center mx-auto mb-4'
        }
      >
        <div className={'flex items-center justify-center gap-4 md:mb-0 mb-6'} id="social-box">
          <Link
            href={currentPath.replace(`/${locale}`, `/en`)}
            aria-label="Switch to English Language"
          >
            EN
          </Link>
          <Link
            href={currentPath.replace(`/${locale}`, `/fa`)}
            aria-label="Switch to Persian Language"
          >
            FA
          </Link>
          <Social />
        </div>
        <div className={'flex items-end justify-center md:mb-0 mb-6 gap-2'}>
          <OptimizedImage width={75} src={Logo} alt={'Logo'} className={'mx-2'} />
          <div className={''}>
            <h1 className={'text-3xl capitalize'}>{trans.website_title}</h1>
            <h2 className={'capitalize'}>{trans.website_subtitle}</h2>
          </div>
        </div>
        <div className="relative" id="simple-search">
          <input
            id="quick-search"
            className="text-sm py-2 px-4 rounded-full bg-transparent border-2 border-slate-400"
            type="text"
            placeholder={trans.search}
          />
          <div className="w-[20px] text-sm absolute bottom-2 ltr:right-4 rtl:left-4 text-slate-400 pointer-events-none">
            <FaSearch size={'24'} />
          </div>
        </div>
      </div>
      <div className={'container m-auto flex flex-wrap items-center justify-between pt-4'}>
        <div className={'hidden md:block flex-1'}></div>
        <Navigation locale={locale} trans={trans} />
        <div
          className={
            'md:flex-1 flex flex-grow items-center md:justify-end justify-between gap-10 capitalize'
          }
        >
          <Link href="#" className={'text-xl font-bold'} aria-label="Login/Register">
            {`${trans.login} / ${trans.register}`}
          </Link>
          <Link href="#" aria-label="Shopping Cart">
            <FaCartShopping size={'24'} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
