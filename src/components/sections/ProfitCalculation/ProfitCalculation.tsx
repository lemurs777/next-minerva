import Switch from '@/components/ui/Switch'
import styles from './ProfitCalculation.module.scss'
import Title from '@/components/Title'
import Block from './Block'

const ProfitCalculation = () => {
	return (
		<div className={styles.calculator}>
			<div className={styles.calculator__inner}>
				<div className={styles.calculator__block}>
					<Block />
				</div>
				<div className={styles.calculator__content}>
					<Title
						title={'services'}
						className={styles.calculator__title}
						titleAccent='our'
					/>
					<div className={styles.calculator__text}>
						<p>
							We offer a fully automated product that allows you to receive
							passive income from cryptocurrency
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfitCalculation
