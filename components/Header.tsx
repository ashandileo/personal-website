'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Typewriter from 'typewriter-effect'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between text-xl font-semibold text-primary-500">
            <span className="text-gray-900 dark:text-gray-50">{'ashandi.leo ~/'}</span>
            <Typewriter
              options={{
                strings: pathname === '/' ? 'home' : pathname.slice(1),
                autoStart: true,
                loop: false,
              }}
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="hidden sm:block font-medium text-gray-900 dark:text-gray-100"
          >
            {link.title}
          </Link>
        ))}
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
