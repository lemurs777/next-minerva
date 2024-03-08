import clsx from 'clsx'
import styles from './Banner.module.scss'
import ButtonGradient from '@/components/ui/buttons/ButtonGradient'
import Image from 'next/image'
import banner from '@/images/banner.png'
const Banner = () => {

	return (
		<div className={styles.banner}>
			<div className={styles.banner__inner}>
				<div className={styles.banner__img}>
					{/* <img src='images/banner.png' alt='decor' /> */}
					<Image src={banner} alt='decor' />
				</div>
				<div className={styles.banner__content}>
					<h3 className={styles.banner__title}>
						earn from <span>1.5%</span> to <span>4% A Day</span>
					</h3>
					<ul className={styles.banner__list}>

						<li >Investments from 10$</li>
						<li>Accruals 7 days a week</li>
						<li>Instant payments <span>direct to the wallet</span></li>

					</ul>

					<ButtonGradient name={'JOIN NOW'} className={styles.banner__btn} />
				</div>
			</div>
		</div>
	)
}
export default Banner
