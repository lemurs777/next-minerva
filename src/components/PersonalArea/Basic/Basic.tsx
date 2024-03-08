import Frame from '@/components/Frame'

import Tooltip from '@/components/ui/CustomTooltip'
import Switch from '@/components/ui/Switch'
import walletIcon from '@/images/wallets/btc.svg'
import Image from 'next/image'
import styles from './Basic.module.scss'
import RadialChart from '@/components/charts/RadialChart'
const Basic = () => {
	return <Frame className={styles.basic}>

		<div className={styles.basic__head}>
			<div className={styles.headItem}>
				<div className={styles.headItem__icon}><Image src={walletIcon} alt='wallet' />
				</div>
				<div className={styles.headItem__info}>
					<div className={styles.headItem__item}>2163.52 USDT</div>
					<div className={styles.headItem__item}>2163.55 $</div>
				</div>
			</div>
			<div className={styles.basic__label}>basic</div>
		</div>
		<div className={styles.basic__line}>
			<div className={styles.total}>
				<div className={styles.total__title}>Total earned:</div>
				<div className={styles.total__info}>
					<span>+10% /</span> +153 $
				</div>
			</div>
			<div className={styles.total}>
				<div className={styles.total__title}>Last day profit:</div>
				<div className={styles.total__info}>
					<span>+1% /</span> +15.3 $
				</div>
			</div>
		</div>
		<div className={styles.basic__line}>
			<div className={styles.basic__switcher}>
				<div className={styles.switch}>
					<div className={styles.switch__wrap}>
						<div className={styles.switch__title}>Reinvestment </div>
						<Tooltip id={'reinv'} content={'lorem'} className={styles.switch__tooltip} />
					</div>
					<Switch size='small' />
				</div>
				<div className={styles.switch}>
					<div className={styles.switch__title}>compounding:</div>
					<Switch size='small' />
				</div>
			</div>
			<RadialChart />
		</div>
		<div className={styles.basic__line}>
			<div className={styles.item}>Next accrual: 23:59:56</div>
			<div className={styles.item}>Investment ends: 02.04.24</div>
		</div>
	</Frame>
}

export default Basic