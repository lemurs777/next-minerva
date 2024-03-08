import clsx from 'clsx'
import styles from './Title.module.scss'
type Props = {
	title: string
	titleAccent?: string
	className?: string
}
const Title = ({ title, titleAccent, className }: Props) => {
	return (
		<h2 className={clsx(className, styles.title)}>
			{title} <span>{titleAccent}</span>
		</h2>
	)
}

export default Title
