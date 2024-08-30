import ContactForm from './contactForm'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/images/logo.png'
import Social from '@/components/elements/Social'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faAt, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Footer = ({ locale, trans }: { locale: string, trans: any }) => {
  return (
    <footer className={"bg-slate-100"}>
      <div className={"md:py-12 py-4"}>
        <div className={"container flex flex-wrap"}>
          <div className={"md:w-5/12 w-full py-4"}>
            <h3 className={"text-3xl font-bold mb-4"}>
              {
                trans.footer_contact_form_title
              }
            </h3>
            <p className={"mb-4"}>
              {
                trans.footer_contact_form_description
              }
            </p>
            <ContactForm trans={trans} />
          </div>
          <div className={""}>
            <nav className={"flex-1"}>
              <ul className="text-lg font-bold flex flex-col gap-2 capitalize md:px-12 py-4">
                <li>
                  <Link href={`/${locale}`}>
                    {
                      trans.home
                    }
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/pages/about`}>
                    {
                      trans.company
                    }
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/products`}>
                    {
                      trans.products
                    }
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    {
                      trans.contact
                    }
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={"py-4"}>
            <div className={"flex items-center mb-4"}>
              <Image
                width={50}
                src={Logo}
                alt="Logo"
                className={"mx-2 mb-2"}
              />
              <span className={"text-4xl capitalize"}>
                {
                  trans.website_title
                }
              </span>
            </div>
            <div className={"flex items-center mb-4"}>
              <FontAwesomeIcon
                className={"px-2"}
                icon={faPhone}
              />
              <p>(+91)8625866608</p>
            </div>
            <div className={"flex items-center mb-4"}>
              <FontAwesomeIcon
                className={"px-2"}
                icon={faAt}
              />
              <Link href="mailto:info@giti-parseh.com">
                info@giti-parseh.com
              </Link>
            </div>
            <div className={"flex items-center mb-4"}>
              <FontAwesomeIcon
                className={"px-2"}
                icon={faLocationDot}
              />
              <p>No. 501, Gloria Apt, Baner<br />Pune 411045</p>
            </div>
          </div>
        </div>
        <div className={"container flex flex-wrap items-center justify-between"}>
          <p className={"text-sm pb-4"}>
            © 2012-2024 Giti Parseh. All Right Reserved
          </p>
          <div className={"pb-4"}>
            <Social />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
