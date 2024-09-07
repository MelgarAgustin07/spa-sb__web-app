'use client'

import './Navs.css'
import Image from 'next/image'
import Link from 'next/link'
import { Hamburger } from './components'
import { reassemble } from '@/helpers'
import { useCallback, useEffect, useRef, useState } from 'react'
import jsonData from '@/data.json'

const { pages } = jsonData
const { stable } = pages

const links = reassemble(stable, (_, { page, title }) => ({
  href: `/${page}`,
  title,
}))

const Navs = () => {
  const asideRef = useRef<HTMLElement | null>(null)
  const [isAsideOpen, setIsAsideOpen] = useState(false)

  const updateAsideWidth = (open: boolean) => {
    const aside = asideRef.current
    if (!aside) return

    const width = `${open ? 0 : aside.clientWidth / 16}rem`
    document.body.style.setProperty('--aside-width', width)
  }

  const handleHamburgerClick = () => {
    updateAsideWidth(isAsideOpen)
    setIsAsideOpen(prevValue => !prevValue)
  }

  const handleClickOutside = useCallback((event: MouseEvent) => {
    const aside = asideRef.current
    if (!aside) return

    if (!aside.contains(event.target as Node)) {
      setIsAsideOpen(false)
      updateAsideWidth(true)
    }
  }, [])

  useEffect(() => {
    isAsideOpen
      ? document.addEventListener('click', handleClickOutside)
      : document.removeEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [handleClickOutside, isAsideOpen])

  return (
    <>
      <header className="cmp-header">
        <Image className="logo" src="/logo.svg" width={40} height={40} alt="" />
        <nav>
          {links.map(({ href, title }) => (
            <Link key={href} href={href}>
              {title}
            </Link>
          ))}
        </nav>
        <Hamburger isOpen={isAsideOpen} handleClick={handleHamburgerClick} />
      </header>
      <aside className="cmp-aside" ref={asideRef}>
        <nav>
          {links.map(({ href, title }) => (
            <Link key={href} href={href}>
              {title}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Navs
