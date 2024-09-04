import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

const Social = () => {
  return (
    <div className={'flex items-center gap-4'}>
      <Link href={'#'} aria-label="Facebook">
        <FaFacebook size={'24'} />
      </Link>
      <Link href={'#'} aria-label="Twitter">
        <FaXTwitter size={'24'} />
      </Link>
      <Link href={'#'} aria-label="Linkedin">
        <FaLinkedin size={'24'} />
      </Link>
      <Link href={'#'} aria-label="Instagram">
        <FaInstagram size={'24'} />
      </Link>
    </div>
  )
}

export default Social
