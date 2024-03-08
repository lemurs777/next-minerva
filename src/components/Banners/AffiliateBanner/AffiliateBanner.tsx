import clsx from 'clsx'
import styles from './AffiliateBanner.module.scss'

const AffiliateBanner = () => {
	return (
		<div className={styles.banner}>
			<div className={styles.banner__innerContent}>
				<div className={styles.banner__content}>
					<h2 className={styles.banner__title}>
						<span>affiliate</span> program
					</h2>
					<div className={styles.banner__text}>
						<p>
							Use your referral link to receive bonuses from your partners
						</p>
					</div>
					<div className={styles.banner__row}>
						<div className={styles.banner__percent}>9% 3% 1% 1% 1%</div>
						<div className={styles.banner__lvl}>LVL 5-10 - 0.5%</div>
					</div>
					<button
						type='button'
						className={clsx('btn-gradient', styles.banner__btn)}
					>
						JOIN NOW
					</button>
				</div>
			</div>
		</div>
	)
}

export default AffiliateBanner
