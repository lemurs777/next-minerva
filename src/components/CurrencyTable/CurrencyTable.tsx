import Image from 'next/image'
import { ICurrencyTable } from '@/interfaces/tables'
import styles from './CurrencyTable.module.scss'
import DocumentIcon from '../icons/DocumentIcon'
import SuccessIcon from '../icons/SuccessIcon'
import clsx from 'clsx'

const CurrencyTable = ({ body }: ICurrencyTable) => {
	return <div className={styles.table}>
		<table>
			<thead>
				<tr>
					<th>Date</th>
					<th>Type</th>
					<th>sum</th>
					<th>currency</th>
					<th>status</th>
					<th>Hash</th>
				</tr>
			</thead>
			<tbody>
				{body?.map(element => (
					<tr key={element.id}>
						<td>{element.date}</td>
						<td>
							<div className={styles.table__icon}>
								<Image src={element.type} alt={'icon'} />
							</div>
						</td>
						<td>{element.sum}</td>
						<td>
							<div className={styles.table__icon}>
								<Image src={element.icon} alt='icon' width={22} height={22} /></div>
						</td>
						<td>
							<div className={clsx(element.status === 'success' && styles.success, styles.table__status)}>

								{element.status === 'success' ? <SuccessIcon /> : ''}
							</div>
						</td>
						<td>
							<button type="button" className={styles.table__btn}>
								<DocumentIcon />
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
}

export default CurrencyTable