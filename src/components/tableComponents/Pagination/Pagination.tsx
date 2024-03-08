import ArrowIcon from '@/components/icons/ArrowIcon'
import clsx from 'clsx'
import styles from './Pagination.module.scss'
type Props = {
	data?: any
}
const Pagination = ({ data }: Props) => {
	return <div className={styles.pagination}>
		<div className={styles.pagination__buttons}>
			<div className={styles.pagination__fragment}>1/1</div>
			<button type="button" className={clsx(!data && styles.disabled, styles.pagination__button, styles.pagination__buttonPrev)}>
				<ArrowIcon />
			</button>
			<button type="button" className={clsx(!data && styles.disabled, styles.pagination__button)}>
				<ArrowIcon />
			</button>
		</div>
	</div>
}

export default Pagination