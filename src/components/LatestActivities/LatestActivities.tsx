import { currency } from '../../../public/db/currency-table'
import CurrencyTable from '../CurrencyTable'
import Frame from '../Frame'
import TableTitle from '../TableTitle'
import styles from './LatestActivities.module.scss'

const LatestActivities = () => {
	return <Frame className={styles.active}>
		<div className={styles.active__header}>
			<TableTitle title='Latest activities' />
		</div>
		<div className={styles.active__body}>
			<CurrencyTable body={currency} />
		</div>
	</Frame>
}

export default LatestActivities