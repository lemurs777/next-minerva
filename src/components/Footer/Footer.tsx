import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import Logo from '../Logo'
import styles from './Footer.module.scss'
const otherLinks = [
	{
		title: 'Sign in',
		link: '/sign-up',
	},
	{
		title: 'Registration',
		link: '/registration',
	},
	{
		title: 'Whitepaper',
		link: '/whitepaper',
	},
	{
		title: 'Contacts',
		link: '/contacts',
	},
	{
		title: 'Dashboard',
		link: '/dashboard',
	},
]
const menuLinks = [
	{
		title: 'Home',
		link: '/',
	},
	{
		title: 'About Us',
		link: '/about-us',
	},
	{
		title: 'Services',
		link: '/services',
	},
	{
		title: 'Affiliate',
		link: '/affiliate',
	},
	{
		title: 'FAQ',
		link: '/faq',
	},
]
const socialList = [
	{
		link: 'https://ua.linkedin.com/',
		icon: <FaLinkedinIn />,
	},
	{
		link: 'https://ua.linkedin.com/',
		icon: <FaFacebookF />,
	},
	{
		link: 'https://ua.linkedin.com/',
		icon: <FaTwitter />,
	},
]
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.footer__row}>
					<div className={styles.footer__col}>
						<div className={styles.footer__logo}>
							<Logo color='light' />
						</div>
						<div className={styles.footer__text}>
							<p>
								Minerva Trade Limited. United Kingdon, London Jorkshire street
								44, 5 floor
							</p>
						</div>
					</div>
					<div className={styles.footer__col}>
						<div className={styles.footer__name}>Menu Links</div>
						<ul className={styles.footer__list}>
							{menuLinks.map(link => (
								<li className={styles.item} key={link.title}>
									<Link className={styles.item__link} href={link.link}>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className={styles.footer__col}>
						<div className={styles.footer__name}>other Links</div>
						<ul className={styles.footer__list}>
							{otherLinks.map(link => (
								<li className={styles.item} key={link.title}>
									<Link className={styles.item__link} href={link.link}>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className={styles.footer__col}>
						<div className={styles.footer__name}>Social media</div>
						<ul className={styles.social}>
							{socialList.map((item, index) => (
								<li className={styles.social__item} key={index}>
									<Link className={styles.social__link} href={item.link}>
										{item.icon}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className={styles.footer__links}>
					<Link className={styles.link} href={'/privacy'}>
						Privacy policy
					</Link>
					&nbsp;|&nbsp;
					<Link className={styles.link} href={'/policy'}>
						Terms of use
					</Link>
				</div>
			</div>
			<div className={styles.footer__copy}>
				<span>Minerva Trade Limited 2024. © All rights reserved</span>
			</div>
		</footer>
	)
}

export default Footer
