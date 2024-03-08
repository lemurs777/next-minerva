import Frame from '@/components/Frame'
import styles from './NewInvestmentActivation.module.scss'

const NewInvestmentActivation = () => {
	return <Frame>
		<div className={styles.invest}>
			<button className={styles.invest__btn}>
				<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect y="8" width="23" height="7" rx="3.5" fill="currentColor" />
					<rect x="15" width="23" height="7" rx="3.5" transform="rotate(90 15 0)" fill="currentColor" />
				</svg>
			</button>
			<div className={styles.invest__text}>New Investment activation</div>
		</div>
	</Frame>
}

export default NewInvestmentActivation