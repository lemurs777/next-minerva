import { ReactNode } from 'react'
import styles from './Frame.module.scss'
import clsx from 'clsx'
type Props = {
	children: ReactNode
	className?: string
}
const Frame = ({ children, className }: Props) => {
	return <div className={clsx(className, styles.frame)}>
		{children}
	</div>
}

export default Frame