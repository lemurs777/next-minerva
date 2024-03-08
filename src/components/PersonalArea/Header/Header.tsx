
import Logo from '@/components/Logo'
import Menu from '@/components/Menu'
import Language from '@/components/language'
import Profile from '../Profile'
import styles from './Header.module.scss'
const Header = () => {
	const menuList = [
		{ link: '/dashboard', title: 'Dashboard' },
		{ link: '/wallets', title: 'wallets' },
		{ link: '/investments', title: 'investments' },
		{ link: '/statistics', title: 'statistics' },
		{ link: '/affiliate', title: 'affiliate program' },
	]
	return <>
		{/* //  <header className={styles.header}>
	// 	<div className="container">
	// 		<div className={styles.header__inner}>
	// 			<Logo />
	// 			<Menu className={styles.header__menu} addModifyClass={true} menuList={menuList} />
	// 			<Profile />
	// 			<Language />
	// 		</div>
	// 	</div>
	// </header> */}
		<header className={styles.header}>
			<div className={styles.header__wrap}>
				<div className={styles.header__inner}>
					<div className={styles.header__logo}>
						<Logo />
					</div>
					<div className={styles.header__menu}>
						<Menu className={styles.header__menu} addModifyClass={true} menuList={menuList} isProfile={true} />
					</div>
					<div className={styles.header__profile}>
						<Profile />
					</div>
					<div className={styles.header__language}>
						<Language />
					</div>
				</div>
			</div>
		</header>
	</>
}

export default Header