'use client'
import clsx from 'clsx'
import styles from './Table.module.scss'
import { useState } from 'react'
import { TableItemProps } from './types'
import ArrowIcon from '@/components/icons/ArrowIcon'
import Pagination from '@/components/tableComponents/Pagination'
type Props = {
	data?: TableItemProps[]
}
const Table = ({ data }: Props) => {
	const [level, setLevel] = useState(0)
	const lvlList = [
		'level 1', 'level 2', 'level 3', 'level 4', 'level 5-10'
	]
	return <div className={styles.table}>
		<div className={styles.table__head}>
			<div className={styles.table__lvls}>
				{lvlList.map((lvl, index) => (
					<button type="button" key={lvl} className={clsx(level === index && styles.active, styles.table__lvl)}
						onClick={() => setLevel(index)}
					>{lvl}</button>
				))}
			</div>
		</div>
		<div className={styles.table__body}>
			{data ? (
				<table>
					<thead>
						<tr>
							<th>Username</th>
							<th>Joined</th>
							<th>Invested $</th>
							<th>Earned $</th>
						</tr>
					</thead>
					<tbody>
						{data.slice(0, 5).map(item => (
							<tr key={item.id}>
								<td>{item.username}</td>
								<td>{item.joined}</td>
								<td>{item.invested}</td>
								<td>{item.earned}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : <div className={styles.table__info}><p>You have no referrals</p></div>}
		</div>
		<div className={styles.table__bottom}>
			{/* <div className={styles.pagination}> */}
			{/* <div className={styles.pagination__fragment}>1/1</div> */}
			{/* <div className={styles.pagination__buttons}>
					<button type="button" className={clsx(!data && styles.disabled, styles.pagination__button)}>
						<ArrowIcon />
					</button>
					<button type="button" className={clsx(!data && styles.disabled, styles.pagination__button)}>
						<ArrowIcon />
					</button>
				</div> */}
			<Pagination />
			{/* </div> */}
		</div>
	</div>
}

export default Table