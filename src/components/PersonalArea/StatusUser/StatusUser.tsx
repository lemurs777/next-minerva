import Frame from '@/components/Frame'
import DouChart from '@/components/charts/DouChart'
import clsx from 'clsx'
import Link from 'next/link'
import styles from './StatusUser.module.scss'

const StatusUser = () => {
	const data = {
		labels: ['Withdrawn', 'Deposited',],
		datasets: [
			{
				data: [40, 60], // Данные в % 
				backgroundColor: [
					'#A155B9',
					'#165BAA',
				],
				borderWidth: 0,
				rotation: 290 //Развернуть чарт на n градус
			},
		],
	}
	return (

		<Frame className={styles.statusFrame}>
			<div className={styles.status}>
				<div className={styles.status__head}>
					<div className={styles.status__title}>Status: <span>Investor</span></div>
				</div>
				<div className={styles.status__body}>
					<div className={styles.status__col}>
						<div className={styles.status__sum}>5.987,34$</div>
						<div className={styles.status__text}>Total balance</div>
					</div>
					<div className={styles.status__col}>
						<DouChart data={data} />
					</div>
				</div>
				<div className={styles.status__bottom}>
					<Link className={clsx(styles.link, 'link link--investments')} href={'/investments'}>Investment Activation</Link>
					<Link className={clsx(styles.link, 'link link--wallets')} href={'/wallets'}>Balance management</Link>
				</div>
			</div>
		</Frame>
	)
}

export default StatusUser