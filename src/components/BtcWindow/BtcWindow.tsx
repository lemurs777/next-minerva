import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import BackIcon from '../icons/BackIcon'
import styles from './BtcWindow.module.scss'
import clsx from 'clsx'
type Props = {
	title: string
	className?: string
	children: ReactNode
	onClick?: () => void
	backBtn?: boolean
}
const BtcWindow = ({ title, children, className, backBtn = true, onClick }: Props) => {

	return <div className={clsx(className, styles.window)}>
		{backBtn
			&&
			<button
				onClick={onClick}
				type="button" className={styles.window__back}>
				<BackIcon />
			</button>
		}
		<div className={styles.window__header}>
			<div className={styles.window__head}>
				<div className={clsx('home-title', styles.window__title)}>{title}</div>
			</div>
		</div>
		<div className={styles.window__body}>
			{children}
		</div>
	</div>
}

export default BtcWindow