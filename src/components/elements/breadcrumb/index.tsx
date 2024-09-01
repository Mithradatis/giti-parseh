'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Breadcrumb = ({ trans }: { trans: any }) => {
  const pathname = usePathname()
  const pathArray = pathname
    .split('/')
    .filter((path) => path)
    .filter((path, index) => path && index !== 0)

  return (
    <nav className="flex px-5 py-3 text-gray-700">
      <ol className="inline-flex items-center space-x-1">
        <li className="inline-flex items-center">
          <Link href="/">
            <span className="text-gray-700 hover:text-blue-600 flex items-center">
              <FontAwesomeIcon icon={faHome} className="mx-2" />
              {trans.home}
            </span>
          </Link>
        </li>
        {pathArray.map((path, index) => {
          const isLast = index === pathArray.length - 1
          const href = `/${pathArray.slice(0, index + 1).join('/')}`
          const name = path.replace(/-/g, ' ')

          return (
            <li key={index} className="inline-flex items-center">
              {!isLast ? (
                <>
                  <FontAwesomeIcon icon={faChevronRight} className="mx-2 text-gray-400" />
                  <Link href={href}>
                    <span className="text-gray-700 hover:text-blue-600">
                      {trans[name] ? trans[name] : name}
                    </span>
                  </Link>
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faChevronRight} className="mx-2 text-gray-400" />
                  <span className="text-gray-400">{trans[name] ? trans[name] : name}</span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
