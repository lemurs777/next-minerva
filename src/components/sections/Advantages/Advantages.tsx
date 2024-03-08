import Title from '@/components/Title'

import instantImg from '../../../../public/images/icons/instant.svg'
import technologicallyImg from '../../../../public/images/icons/technologically.svg'
import securedImg from '../../../../public/images/icons/secured.svg'
import supportImg from '../../../../public/images/icons/support.svg'
import automatedImg from '../../../../public/images/icons/automated.svg'
import intuitivelyImg from '../../../../public/images/icons/intuitively.svg'

import styles from './Advantages.module.scss'
import Image from 'next/image'
const advantageList = [
	{
		title: 'Instant',
		description: 'Automated withdrawals and replenishment',
		image: instantImg,
	},
	{
		title: 'Technologically',
		description: 'Maximum protection, highest level of programming',
		image: technologicallyImg,
	},
	{
		title: 'Secured',
		description: 'Secure web application and cold wallets',
		image: securedImg,
	},
	{
		title: '24/7 Support',
		description: 'Direct support via email, chat and social networks',
		image: supportImg,
	},
	{
		title: 'Automated',
		description: 'The bot does all the work automatically',
		image: automatedImg,
	},
	{
		title: 'intuitively',
		description: 'Convenient and simple User Interface',
		image: intuitivelyImg,
	},
]
const Advantages = () => {
	return (
		<section className={styles.advantages}>
			<div className={styles.advantages__head}>
				<Title
					className={styles.advantages__title}
					title='our'
					titleAccent='advantages'
				/>
				<div className={styles.advantages__text}>
					<p>
						Minerva bot gives you the opportunity to activate unlimited number
						of investments in more than 11 cryptocurrencies that bring daily
						profits
					</p>
				</div>
			</div>
			<div className={styles.advantages__body}>
				<div className={styles.advantages__block}>
					<video src='/videos/advantages.webm' autoPlay muted loop></video>
					<ul className={styles.advantages__list}>
						{advantageList.map(item => (
							<li key={item.title} className={styles.item}>
								<div className={styles.item__content}>
									<div className={styles.item__title}>{item.title}</div>
									<div className={styles.item__text}>
										<p>{item.description}</p>
									</div>
								</div>
								<div className={styles.item__icon}>
									<Image src={item.image} alt={item.title} />
									{/* <img src='/images/faq.png' alt='' /> */}
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Advantages
