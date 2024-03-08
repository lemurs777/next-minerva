'use client'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import clsx from 'clsx'
import { Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ButtonBorderGradient from '../../ui/buttons/ButtonBorderGradient'
import InputField from '../../ui/forms/InputField'
import { initialValue } from './helper'
interface Values {
	username: string
	password: string
}
const Login = () => {
	const breakpoints = {
		isMobile: useMediaQuery('(max-width: 767.98px)'),
		active: "SSR",
	}
	const router = useRouter()
	return <div className={'authorization'}>
		<div className={'authorization__inner'}>
			<button
				onClick={() => router.push('/')}
				type="button" className={'authorization__back'}>
				<svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
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
				</svg>
			</button>
			<div className={clsx('home-title', 'authorization__label')}>Login</div>
			<div className={'authorization__body'}>
				<div className={'authorization__icon'}>
					<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
						<path d="M22.3673 25.6667L18.0997 21.399C17.1886 20.4879 17.1886 19.0108 18.0997 18.0997C19.0108 17.1886 20.4879 17.1886 21.399 18.0997L31.2993 28L21.399 37.9003C20.4879 38.8114 19.0108 38.8114 18.0997 37.9003C17.1886 36.9892 17.1886 35.5121 18.0997 34.601L22.3673 30.3333H9.33333C8.04467 30.3333 7 29.2887 7 28C7 26.7113 8.04467 25.6667 9.33333 25.6667H22.3673ZM25.6667 9.33333C25.6667 8.04467 26.7113 7 28 7H44.3333C46.9 7 49 9.1 49 11.6667V44.3333C49 46.9 46.9 49 44.3333 49H28C26.7113 49 25.6667 47.9553 25.6667 46.6667C25.6667 45.378 26.7113 44.3333 28 44.3333H44.3333V11.6667H28C26.7113 11.6667 25.6667 10.622 25.6667 9.33333Z" fill="url(#paint0_linear_279_4701)" />
						<defs>
							<linearGradient id="paint0_linear_279_4701" x1="7" y1="28" x2="49" y2="28" gradientUnits="userSpaceOnUse">
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
						<form className={'auth-form'} onSubmit={handleSubmit}>
							<div className={'auth-form__input'}>
								<InputField name={'username'} placeholder='Username' />
							</div>
							<div className={'auth-form__input'}>
								<InputField name={'password'} placeholder='password' type='password' />
							</div>
							<ButtonBorderGradient type='submit' formBtn={true} name={'enter'} />
						</form>
					)}
				</Formik>
				<div className={'authorization__items'}>
					<div className={'authorization__item'}>
						Don&apos;t have an account yet? <Link href={'/registration'}>Register</Link>
					</div>
					<div className={'authorization__item'}>
						Forgot your password? <Link href={'/restore'}>Restore</Link>
					</div>
					{breakpoints.isMobile && (
						<div className={'authorization__item'}>
							Login to <Link href={'/'}>Demo account</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	</div >
}

export default Login