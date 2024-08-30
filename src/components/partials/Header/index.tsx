import React from 'react'
import Logo from '@/assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/partials/Navigation'
import Social from '@/components/elements/Social'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = ({ locale, trans }: { locale: string, trans: any }) => {
  const currentPath = `/${locale}`;

  return (
    <header className={"p-5"}>
      <div className={"container flex flex-wrap items-center md:justify-between justify-center mx-auto mb-4"}>
        <div className={"flex items-center justify-center gap-4 md:mb-0 mb-6"} id="social-box">
          <Link href={currentPath.replace(`/${locale}`, `/en`)}>
            EN
          </Link>
          <Link href={currentPath.replace(`/${locale}`, `/fa`)}>
            FA
          </Link>
          <Social />
        </div>
        <h1 className={"flex items-center justify-center md:mb-0 mb-6"}>
          <Image
            width={75}
            src={Logo}
            alt="Logo"
            className={"mx-2"}
          />
          <span className={"text-3xl capitalize"}>
            {
              trans.website_title
            }
          </span>
        </h1>
        <div className="relative" id="simple-search">
          <input
            className="text-sm py-2 px-4 rounded-full bg-transparent border-2 border-slate-400"
            type="text"
            placeholder={trans.search}
          />
          <div
            className="w-[20px] text-sm absolute bottom-2 ltr:right-4 rtl:left-4 text-slate-400 pointer-events-none"
          >
            <FontAwesomeIcon
              icon={faSearch}
              size="sm"
            />
          </div>
        </div>
      </div>
      <div className={"container m-auto flex flex-wrap items-center justify-between pt-4"}>
        <div className={"hidden md:block flex-1"}></div>
        <Navigation 
          locale={locale} 
          trans={trans}
        />
        <div className={"md:flex-1 flex flex-grow items-center md:justify-end justify-between gap-10 capitalize"}>
          <Link
            href="#"
            className={"text-xl font-bold"}
          >
            { `${trans.login} / ${trans.register}` }
          </Link>
          <Link
            href="#"
            className={"text-xl font-bold"}
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ width: '25px' }}
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
