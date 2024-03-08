'use client'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import btnImg from '../../../public/images/icons/icon-btn.svg'
import Logo from '../Logo'
import Menu from '../Menu'
import Language from '../language/Language'
import styles from './Header.module.scss'
import ButtonBorderGradient from '../ui/buttons/ButtonBorderGradient'
import { useMediaQuery } from '@/hooks/useMediaQuery'
const Header = () => {
	const breakpoints = {
		isMobile: useMediaQuery("(max-width: 767.98px)"),
		active: "SSR",
	}
	const menuList = [
		{ link: '/', title: 'home' },
		{ link: '/#about', title: 'about us' },
		{ link: '/#services', title: 'services' },
		{ link: '/#affiliate', title: 'affiliate' },
		{ link: '/#faq', title: 'faq' },
	]
	return (
		<header className={styles.header}>
			<div className={styles.header__wrap}>
				<div className={styles.header__inner}>
					<div className={styles.header__logo}>
						<Logo />
					</div>
					<div className={styles.header__menu}>
						<Menu menuList={menuList} />
					</div>
					<div className={styles.header__language}>
						<Language />
					</div>
					{!breakpoints.isMobile && (
						<div className={styles.header__actions}>
							<ButtonBorderGradient name='login' link='/login' />
							<button className={styles.header__btn}>
								<Image src={btnImg} alt={'icon'} width={18} height={18} />
							</button>
						</div>
					)}
				</div>
			</div>
		</header>
	)
}

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: [],
		fallback: false,
	}
}
export const getStaticProps: GetStaticProps = async ctx => {
	return {
		props: {},
	}
}

export default Header
