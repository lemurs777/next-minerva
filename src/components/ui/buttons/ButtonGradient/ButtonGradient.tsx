import Link from 'next/link'
import styles from './ButtonGradient.module.scss'
import clsx from 'clsx'
type Props = {
	name: string
	className?: string
	link?: string
	size?: 'small' | 'large'
	onClick?: () => void
}
const ButtonGradient = ({ name, className, size, onClick, link = '' }: Props) => {
	return (
		<>
			{link === '' ? (
				<button
					className={clsx(
						className,
						size == 'small'
							? styles.small
							: size === 'large'
								? styles.large
								: null,
						styles.btn
					)}
					onClick={onClick}
				>
					{name}
				</button>
			) : (
				<Link
					className={clsx(
						className,
						size == 'small'
							? styles.small
							: size === 'large'
								? styles.large
								: null,
						styles.btn
					)}
					onClick={onClick}
					href={link}
				>
					{name}
				</Link>
			)}
		</>
	)
}

export default ButtonGradient
