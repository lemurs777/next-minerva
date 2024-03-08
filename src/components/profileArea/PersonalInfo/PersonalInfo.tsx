import Frame from '@/components/Frame'
import styles from './PersonalInfo.module.scss'
import TableTitle from '@/components/TableTitle'
import { Formik, FormikHelpers, FormikValues } from 'formik'
import { initialValue, schemas } from './helper'
import InputField from '@/components/ui/forms/InputField'
import Select from '@/components/ui/Select'
import ButtonBorderGradient from '@/components/ui/buttons/ButtonBorderGradient'
import { useState } from 'react'

const PersonalInfo = () => {

	const language = [
		{
			title: 'EN',
			id: 'en'
		},
		{
			id: 'ua',
			title: 'UA'
		}
	]
	return <Frame className={styles.info}>
		<div className={styles.info__header}>
			<TableTitle className={styles.title} title='Personal information' />
		</div>
		<Formik initialValues={initialValue}
			onSubmit={() => console.log('success')}
			validationSchema={schemas.custom}>
			<form className={styles.form}>
				<div className={styles.form__grid}>
					<div className={styles.form__col}>
						<InputField name='name' id='form-name' label='Name' placeholder='Enter your name' />
						<InputField name='surname' id='form-surname' label='Surname' placeholder='Enter your Surname' />
						<Select label='Language' classNameWrap={styles.select__wrap} className={styles.select}
							classNameBtn={styles.select__btn} options={language} />
					</div>
					<div className={styles.form__col}>
						<InputField name='second-email' id='form-second-email' label='Second Email' placeholder='Enter your second email' />
						<InputField name='country' id='form-country' label='Country' placeholder='Enter your Country' />
						<InputField name='city' id='form-city' label='City' placeholder='Enter your City' />
					</div>
					<div className={styles.form__col}>
						<InputField name='facebook' id='form-facebook' label='Facebook' placeholder='Enter your facebook page' />
						<InputField name='linkedin' id='form-linkedin' label='Linkedin' placeholder='Enter your linkedin page' />
						<InputField name='twitter' id='form-twitter' label='Twitter' placeholder='Enter your twitter page' />
					</div>
				</div>
				<div className={styles.form__btns}>
					<ButtonBorderGradient name={'save changes'} className={styles.form__submit} />
				</div>
			</form>

		</Formik>

	</Frame >
}

export default PersonalInfo