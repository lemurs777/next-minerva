'use client'
import Checkbox from '@/components/ui/forms/Checkbox'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import clsx from 'clsx'
import { Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ButtonBorderGradient from '../../ui/buttons/ButtonBorderGradient'
import InputField from '../../ui/forms/InputField'
import styles from './Register.module.scss'
import { initialValue } from './helper'
interface Values {
	username: string
	password: string
}
const Register = () => {
	const router = useRouter()
	const breakpoints = {
		isMobile: useMediaQuery("(max-width: 767.98px)"),
		active: "SSR",
	}
	return <div className={'authorization'}>
		<div className={'authorization__inner'}>
			{!breakpoints.isMobile && (
				<button
					onClick={() => router.push('/')}
					type="button" className={'authorization__back'}>					<svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
						<g clipPath="url(#clip0_111_869)">
							<path d="M0.585787 13.5858C-0.195263 14.3668 -0.195263 15.6332 0.585787 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857863C15.3611 0.0768142 14.0948 0.0768141 13.3137 0.857863L0.585787 13.5858ZM31 13L2 13L2 17L31 17L31 13Z" fill="url(#paint0_linear_111_869)" />
						</g>
						<defs>
							<linearGradient id="paint0_linear_111_869" x1="31" y1="14.5" x2="2" y2="14.5" gradientUnits="userSpaceOnUse">
								<stop stop-color="#4757E6" />
								<stop offset="0.484375" stop-color="#8E54E9" />
								<stop offset="1" stop-color="#FA0A9A" />
							</linearGradient>
							<clipPath id="clip0_111_869">
								<rect width="31" height="30" fill="white" />
							</clipPath>
						</defs>
					</svg></button>
			)}

			<div className={clsx('home-title', 'authorization__label')}>registration</div>
			<div className={'authorization__body'}>
				<div className={'authorization__icon'}>
					<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
						<path d="M32.9234 17.9433H13.3234C12.2967 17.9433 11.4567 17.1033 11.4567 16.0767C11.4567 15.05 12.2967 14.21 13.3234 14.21H32.9234C33.9501 14.21 34.7901 15.05 34.7901 16.0767C34.7901 17.1033 33.9501 17.9433 32.9234 17.9433ZM21.4901 28.21H13.0901C12.0634 28.21 11.2234 27.37 11.2234 26.3433C11.2234 25.3167 12.0634 24.4767 13.0901 24.4767H21.4901C22.5167 24.4767 23.3567 25.3167 23.3567 26.3433C23.3567 27.37 22.5167 28.21 21.4901 28.21ZM17.7567 38.4767H13.0901C12.0634 38.4767 11.2234 37.6367 11.2234 36.61C11.2234 35.5833 12.0634 34.7433 13.0901 34.7433H17.7567C18.7834 34.7433 19.6234 35.5833 19.6234 36.61C19.6234 37.6367 18.7834 38.4767 17.7567 38.4767ZM37.3334 23.3333C29.6101 23.3333 23.3334 29.61 23.3334 37.3333C23.3334 45.0567 29.6101 51.3333 37.3334 51.3333C45.0567 51.3333 51.3334 45.0567 51.3334 37.3333C51.3334 29.61 45.0567 23.3333 37.3334 23.3333ZM37.3334 47.6C31.6634 47.6 27.0667 43.0033 27.0667 37.3333C27.0667 31.6633 31.6634 27.0667 37.3334 27.0667C43.0034 27.0667 47.6001 31.6633 47.6001 37.3333C47.6001 43.0033 43.0034 47.6 37.3334 47.6Z" fill="url(#paint0_linear_279_4703)" />
						<path d="M37.3333 41.9533C36.61 42.6767 35.42 42.6767 34.6967 41.9533L30.73 37.9867C30.0067 37.2633 30.0067 36.0733 30.73 35.35C31.4533 34.6267 32.6433 34.6267 33.3667 35.35L37.3333 39.3167C38.0567 40.04 38.0567 41.23 37.3333 41.9533Z" fill="url(#paint1_linear_279_4703)" />
						<path d="M43.9366 35.35L37.3332 41.9533C36.6099 42.6767 35.4199 42.6767 34.6966 41.9533C33.9732 41.23 33.9732 40.04 34.6966 39.3167L41.2999 32.7133C42.0232 31.99 43.2132 31.99 43.9366 32.7133C44.6599 33.4367 44.6599 34.6267 43.9366 35.35Z" fill="url(#paint2_linear_279_4703)" />
						<path d="M19.6 44.0767H8.53997V8.61001H37.4733V19.6C37.4733 20.6267 38.3133 21.4667 39.34 21.4667C40.3666 21.4667 41.2066 20.6267 41.2066 19.6V7.67668C41.2066 6.13668 39.9466 4.87668 38.4066 4.87668H7.60664C6.06664 4.87668 4.80664 6.13668 4.80664 7.67668V45.01C4.80664 46.55 6.06664 47.81 7.60664 47.81H19.6C20.6266 47.81 21.4666 46.97 21.4666 45.9433C21.4666 44.8933 20.6266 44.0767 19.6 44.0767Z" fill="url(#paint3_linear_279_4703)" />
						<defs>
							<linearGradient id="paint0_linear_279_4703" x1="11.2234" y1="32.7717" x2="51.3334" y2="32.7717" gradientUnits="userSpaceOnUse">
								<stop stop-color="#4757E6" />
								<stop offset="0.765" stop-color="#8E54E9" />
							</linearGradient>
							<linearGradient id="paint1_linear_279_4703" x1="30.1875" y1="38.6517" x2="37.8758" y2="38.6517" gradientUnits="userSpaceOnUse">
								<stop stop-color="#4757E6" />
								<stop offset="0.765" stop-color="#8E54E9" />
							</linearGradient>
							<linearGradient id="paint2_linear_279_4703" x1="34.1541" y1="37.3333" x2="44.4791" y2="37.3333" gradientUnits="userSpaceOnUse">
								<stop stop-color="#4757E6" />
								<stop offset="0.765" stop-color="#8E54E9" />
							</linearGradient>
							<linearGradient id="paint3_linear_279_4703" x1="4.80664" y1="26.3433" x2="41.2066" y2="26.3433" gradientUnits="userSpaceOnUse">
								<stop stop-color="#4757E6" />
								<stop offset="0.765" stop-color="#8E54E9" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<Formik
					initialValues={initialValue}
					validate={values => {
						const errors = {}
						if (!values.username) {
							// @ts-ignore
							errors.username = 'Required'
						}
						if (!values.email) {
							// @ts-ignore
							errors.email = 'Required'
						}
						if (!values.repeatPassword) {
							// @ts-ignore
							errors.repeatPassword = 'Required'
						}
						if (!values.password) {
							// @ts-ignore
							errors.password = 'Required'
						}
						return errors
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							router.push('/dashboard')
							setSubmitting(false)
						}, 400)
					}}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
					}) => (
						<form className={styles.form} onSubmit={handleSubmit}>
							<div className={styles.form__name}>Upliler: <span>Monitor</span></div>
							<div className={styles.form__input}>
								<InputField name={'username'} placeholder='Username' />
							</div>
							<div className={styles.form__input}>
								<InputField name={'email'} type='email' placeholder='Email' />
							</div>

							<div className={styles.form__input}>
								<InputField name={'password'} placeholder='password' type='password' />
							</div>
							<div className={styles.form__input}>
								<InputField name={'repeat-password'} type='password' placeholder='Repeat password' />
							</div>
							<div className={styles.form__checkbox}>
								<span>I accept the <Link href={'/privacy'}>Privacy Policy</Link> and <Link href={'/terms'}>Terms of Use</Link>
								</span>
								<Checkbox />
							</div>
							<ButtonBorderGradient type='submit' formBtn={true} name={'enter'} />
						</form>
					)}
				</Formik>
				<div className={'authorization__items'}>
					<div className={'authorization__item'}>
						Already have an account? <Link href={'/login'}>Login</Link>
					</div>
				</div>
			</div>
		</div>
	</div >
}

export default Register