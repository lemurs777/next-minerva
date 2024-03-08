import Frame from '@/components/Frame'
import styles from './Notifications.module.scss'
import ButtonBorderGradient from '@/components/ui/buttons/ButtonBorderGradient'
import Checkbox from '@/components/ui/forms/Checkbox/Checkbox'

const Notifications = () => {
	return <Frame className={styles.notify}>
		<div className={styles.notify__title}>Email Notifications settings</div>
		<div className={styles.notify__checkboxes}>
			<Checkbox className={styles.checkbox} label='Password or PIN-Code changes' />
			<Checkbox className={styles.checkbox} label='Financial Transactions' />
			<Checkbox className={styles.checkbox} label='Account logins from new devices' />
			<Checkbox className={styles.checkbox} label='Promo Letters' />
		</div>
		<div className={styles.notify__btns}>

			<ButtonBorderGradient className={styles.notify__btn} name={'save changes'} />
		</div>
	</Frame>
}

export default Notifications