import clsx from 'clsx'
import Link from 'next/link'
import styles from './ButtonBorderGradient.module.scss'
import { ReactNode } from 'react'
type Props = {
	name: string
	className?: string
	link?: string
	children?: ReactNode,
	darkText?: boolean
	onClick?: () => void
	type?: "submit" | "reset" | "button" | undefined
	formBtn?: boolean
}
const ButtonBorderGradient = ({ name, className, children, formBtn, type = 'button', onClick, link = '', darkText = false }: Props) => {
	return <>
		{link === '' ? (
			<button
				className={clsx(
					className,
					styles.btn,
					formBtn && styles.secondary
				)}
				type={type}
				onClick={onClick}
			>
				{children}
				<span className={darkText ? styles.dark : styles.gradient}>
					{name}
				</span>
			</button>
		) : (
			<Link
				className={clsx(
					className,
					styles.btn,
					formBtn && styles.secondary
				)}
				onClick={onClick}
				href={link}
			>
				{children}
				<span className={darkText ? styles.dark : styles.gradient}>
					{name}
				</span>
			</Link>
		)}
	</>
}

export default ButtonBorderGradient