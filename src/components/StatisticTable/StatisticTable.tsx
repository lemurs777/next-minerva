'use client'
import Frame from '../Frame'
import TableTitle from '../TableTitle'
import styles from './StatisticTable.module.scss'
import diagramIcon from '../../images/icons/diagram.svg'
import replenishmentIcon from '../../images/icons/received.svg'
import withdrawalsIcon from '../../images/icons/withdrawals.svg'
import bonusIcon from '../../images/icons/people-bonus.svg'
import ButtonActive from '../ui/buttons/ButtonActive'
import Image from 'next/image'
import CurrencyTable from '../CurrencyTable'
import { currency } from '../../../public/db/currency-table'
import Pagination from '../tableComponents/Pagination'
import { useState } from 'react'
import clsx from 'clsx'
const StatisticTable = () => {
	const [active, setActive] = useState(0)
	const sortBtns = [
		{
			title: 'all',
			sort: 'all'
		},
		{
			title: 'accruals',
			icon: diagramIcon,
			sort: 'accruals'
		},
		{
			title: 'replenishment',
			icon: replenishmentIcon,
			sort: 'replenishment'
		},
		{
			title: 'withdrawals',
			icon: withdrawalsIcon,
			sort: 'withdrawals'
		},
		{
			title: 'invitation bonus',
			icon: bonusIcon,
			sort: 'invitation'
		}
	]
	return <Frame className={styles.statistics}>
		<div className={styles.statistics__header}>
			<TableTitle title={'statistics'} className={styles.title} />
			<div className={styles.statistics__btns}>
				{sortBtns.map((btn, index) => (
					<ButtonActive key={index} onClick={() => setActive(index)} className={clsx(active === index && 'active-btn', styles.btn)}>
						{btn.icon && (
							<span className={styles.btn__icon}>
								<Image src={btn.icon} alt={btn.title} />
							</span>
						)}
						{btn.title}
					</ButtonActive>
				))}
			</div>
		</div>
		<div className={styles.statistics__body}>
			<CurrencyTable body={currency} />
		</div>
		<div className={styles.statistics__bottom}>
			<Pagination data={currency} />
		</div>
	</Frame>
}

export default StatisticTable