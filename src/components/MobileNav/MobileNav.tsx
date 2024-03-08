'use client'
import Link from 'next/link'
import styles from './MobileNav.module.scss'
import { useState } from 'react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

const MobileNav = () => {
	const links = [
		{
			title: 'dashboard',
			link: '/dashboard'
		},
		{
			title: 'wallets',
			link: '/wallets'
		},
		{
			title: 'statistics-mobile',
			link: '/statistics'
		},
		{
			title: 'affiliate',
			link: '/affiliate'
		}
	]
	const pathname = usePathname()
	const [active, setActive] = useState(0)
	return <div className={styles.nav}>
		<button type='button' className={styles.nav__add}><span>+</span></button>
		<div className={styles.nav__inner}>
			<nav className={styles.nav__menu}>
				{links.slice(0, 2).map((item, index) => (
					<Link key={index} href={item.link}
						onClick={() => console.log(pathname)}
						className={clsx(pathname === item.link && 'selected', `link link--${item.title}`)}></Link>
				))}
			</nav>
			<nav className={styles.nav__menu}>
				{links.slice(2, 4).map((item, index) => (
					<Link key={index} href={item.link}
						onClick={() => console.log(pathname)}
						className={clsx(pathname === item.link && 'selected', `link link--${item.title}`)}></Link>
				))}
			</nav>
		</div>
	</div>
}

export default MobileNav