import Frame from '@/components/Frame'
import InputField from '@/components/ui/forms/InputField'
import styles from './PasswordChange.module.scss'
import { Formik } from 'formik'
import { initialValue } from './helper'
import ButtonBorderGradient from '@/components/ui/buttons/ButtonBorderGradient'
import PinCode from '@/components/ui/forms/PinCode'

const PasswordChange = () => {
	return <Frame className={styles.change}>
		<div className={styles.change__title}>change your password</div>
		<div className={styles.change__form}>
			<Formik initialValues={initialValue} onSubmit={() => console.log('success')}>
				<form className={styles.form}>
					<InputField className={styles.form__item} type='password' name={'form-pass-change'} id='form-pass-change' placeholder='Enter your name' label='New password' />
					<InputField className={styles.form__item} type='password' name={'form-pass-repeat'} id='form-pass-repeat' placeholder='Enter Surname' label='Repeat new password' />

					<PinCode className={styles.form__pinCode} label='Enter pincode' counter={6} />
					<ButtonBorderGradient formBtn={true} className={styles.form__submit} name={'save changes'} />
				</form>
			</Formik>
		</div>
	</Frame>
}

export default PasswordChange