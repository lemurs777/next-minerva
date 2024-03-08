import clsx from 'clsx'
import styles from './ButtonActive.module.scss'
import { ReactNode, useState } from 'react'
type Props = {

	children: ReactNode
	className?: string
	onClick?: any
}
const ButtonActive = ({ children, className, onClick }: Props) => {
	return <button type='button' className={clsx(styles.btn, className)} onClick={onClick}>{children}</button>
}

export default ButtonActive