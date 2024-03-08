import clsx from 'clsx'
import { ReactNode } from 'react'
import styles from './TableFrame.module.scss'
type Props = {
	headerChild: ReactNode
	children: ReactNode
	className?: string
}
const TableFrame = ({ headerChild, children, className }: Props) => {
	return <div className={clsx(styles.frame, className)}>
		<div className={styles.frame__header}>{headerChild}</div>
		<div className={styles.frame__body}>
			{children}
		</div>
	</div>
}

export default TableFrame