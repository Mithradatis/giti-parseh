import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faXTwitter,
  } from '@fortawesome/free-brands-svg-icons'

const Social = () => {
    return (
        <div className={"flex items-center gap-4"}>
            <Link href={"#"}>
                <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ width: '25px' }}
                />
            </Link>
            <Link href={"#"}>
                <FontAwesomeIcon
                    icon={faXTwitter}
                    style={{ width: '25px' }}
                />
            </Link>
            <Link href={"#"}>
                <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ width: '25px' }}
                />
            </Link>
            <Link href={"#"}>
                <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ width: '25px' }}
                />
            </Link>
        </div>
    )
}

export default Social
