'use client'
import Frame from '../Frame'
import TableTitle from '../TableTitle'
import CustomLineChart from '../charts/CustomLineChart'
import InfoIcon from '../icons/InfoIcon'
import CustomTooltip from '../ui/CustomTooltip'
import styles from './BalanceDynamic.module.scss'

const BalanceDynamic = () => {
	return <Frame className={styles.balance}
	>
		<div className={styles.balance__header}>
			<TableTitle title='balance dynamics' />
			<CustomTooltip id={'balance'} content={'balance dynamics'} icon={'i'} classNameIcon={styles.tooltipIcon} />
		</div>
		<CustomLineChart />
	</Frame>
}

export default BalanceDynamic