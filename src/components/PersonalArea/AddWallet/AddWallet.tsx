import Frame from '@/components/Frame'
import styles from './AddWallet.module.scss'
type Props = {
	onClick?: () => void
}
const AddWallet = ({ onClick }: Props) => {
	return (
		<button className={styles.btn} onClick={onClick}>
			<span className={styles.btn__text}>add wallet</span>
			<div className={styles.btn__icon}>
				<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="0.252441" y="5.164" width="14.495" height="4.41151" rx="2.20575" fill="currentColor" />
					<rect x="9.70557" y="0.122314" width="14.495" height="4.41151" rx="2.20575" transform="rotate(90 9.70557 0.122314)" fill="currentColor" />
				</svg>

			</div>
		</button>
	)
}

export default AddWallet