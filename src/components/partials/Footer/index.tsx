import ContactForm from './contactForm'
import Link from 'next/link'
import OptimizedImage from '@/components/elements/OptimizedImage'
import Logo from '@/assets/images/logo.png'
import Social from '@/components/elements/Social'
import { FaPhone, FaAt, FaLocationDot } from 'react-icons/fa6'

const Footer = ({ locale, trans }: { locale: string; trans: any }) => {
  return (
    <footer className={'bg-slate-100'}>
      <div className={'md:py-12 py-4'}>
        <div className={'container flex md:flex-row flex-col flex-wrap'}>
          <div className={'md:w-5/12 w-full py-4'}>
            <p className={'text-3xl font-bold mb-4'}>{trans.footer_contact_form_title}</p>
            <p className={'mb-4'}>{trans.footer_contact_form_description}</p>
            <ContactForm trans={trans} />
          </div>
          <div className={''}>
            <nav className={'flex-1'}>
              <ul className="text-lg font-bold flex flex-col gap-2 capitalize md:px-12 py-4">
                <li>
                  <Link href={`/${locale}`} aria-label={trans.home}>
                    {trans.home}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/pages/about`} aria-label={trans.company}>
                    {trans.company}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/products`} aria-label={trans.products}>
                    {trans.products}
                  </Link>
                </li>
                <li>
                  <Link href="#" aria-label={trans.contact}>
                    {trans.contact}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={'py-4'}>
            <div className={'flex items-center mb-4'}>
              <OptimizedImage width={50} src={Logo} alt="Logo" className={'mx-2 mb-2'} />
              <span className={'text-4xl capitalize'}>{trans.website_title}</span>
            </div>
            <div className={'flex items-start mb-4'}>
              <FaPhone className={'px-2'} size={'32'} />
              <div className={"block"}>
                <p>(+91)7030443963</p>
                <p>(+98)9120409723</p>
                <p>(+98)9163971510</p>
              </div>
            </div>
            <div className={'flex items-center mb-4'}>
              <FaAt className={'px-2'} size={'32'} />
              <Link href="mailto:info@emcparseh.com">info@emcparseh.com</Link>
            </div>
            <div className={'flex items-start mb-4'}>
              <FaLocationDot className={'px-2'} size={'32'} />
              <p>
                No 304 , camellia complex , Baner Pashan link road
                <br />
                Pune 411045
                <br />
                Maharashtra, India
              </p>
            </div>
          </div>
        </div>
        <div className={'container flex flex-wrap items-center justify-between'}>
          <p className={'text-sm pb-4'}>© 2012-2024 Giti Parseh. All Right Reserved</p>
          <div className={'pb-4'}>
            <Social />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
