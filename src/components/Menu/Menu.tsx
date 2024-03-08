'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ButtonGradient from '../ui/buttons/ButtonGradient'
import styles from './Menu.module.scss'
type MenuItemProps = {
	link: string,
	title: string,
	icon?: any
}
type Props = {
	menuList: MenuItemProps[]
	addModifyClass?: boolean
	className?: string
	isProfile?: boolean
}
const Menu = ({ menuList, addModifyClass = false, isProfile = false, className }: Props) => {
	const [showMenu, setShowMenu] = useState(false)
	const router = useRouter()
	const [active, setActive] = useState(0)
	return (
		<nav className={clsx(className, styles.menu)}>
			<button type="button"
				onClick={() => setShowMenu(!showMenu)}
				className={clsx(showMenu && styles.active, styles.mobileBtn)}><span></span></button>
			<div className={clsx(showMenu && styles.show, styles.menu__body)}>
				<ul className={styles.menu__list}>
					{menuList.map((item, index) => (
						<li key={item.title} className={clsx(
							// pathname === item.link ? styles.active : '',
							active === index && styles.active
						)}
							onClick={() => {
								router.push(item.link)
								setActive(index)
								setShowMenu(false)
							}}
						>
							<Link
								className={clsx(styles.link, addModifyClass && `link link--${item.title.toLowerCase().replace(' ', '-')}`)}
								href={item.link}
							>
								{item.icon && (<span>{item.icon}</span>)}
								{item.title}
							</Link>
						</li>
					))}
				</ul>
				<div className={styles.menu__actions}>
					<ButtonGradient className={styles.menu__btnGradient}
						onClick={() => setShowMenu(false)}
						name={isProfile ? 'profile' : 'login'} link={isProfile ? '/profile' : '/login'} />
					<Link href={isProfile ? '/' : '/registration'} className={styles.menu__btn}>
						<span>{isProfile ? 'LOGOUT' : 'SIGNUP'}</span>
					</Link>
				</div>
			</div>
		</nav >
	)
}

export default Menu
