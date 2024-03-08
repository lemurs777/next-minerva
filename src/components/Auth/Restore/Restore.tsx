'use client'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import clsx from 'clsx'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ButtonBorderGradient from '../../ui/buttons/ButtonBorderGradient'
import InputField from '../../ui/forms/InputField'
import { initialValue } from './helper'
interface Values {
	username: string
	password: string
}
const Restore = () => {
	const [step, setStep] = useState(1)
	const breakpoints = {
		isMobile: useMediaQuery("(max-width: 767.98px)"),
		active: "SSR",
	}
	const router = useRouter()
	return <div className='authorization'>
		<div className='authorization__inner'>
			{!breakpoints.isMobile && (
				<button
					onClick={() => {
						if (step === 1) {
							router.push('/')
						} else if (step === 2) {
							setStep(1)
						}
					}}
					type="button" className='authorization__back'>		<svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
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

			<div className={clsx('home-title', 'authorization__label')}>password recovery</div>
			<div className={'authorization__body'}>
				<div className={'authorization__icon'}>
					<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
						<path d="M42.2851 51.8087H13.715C10.4276 51.8087 7.7627 49.1438 7.7627 45.8565V31.5713C7.7627 29.1319 9.2336 27.041 11.3339 26.1217V20.8572C11.3339 11.6528 18.7955 4.19116 27.9999 4.19116C35.737 4.19116 42.2237 9.47107 44.1013 16.6189L44.0782 16.6263C44.1393 16.837 44.1824 17.0555 44.1824 17.2859C44.1824 18.6009 43.1164 19.6668 41.8016 19.6668C40.7622 19.6668 39.8877 18.9967 39.5629 18.0684L39.5622 18.0685C38.3053 12.8418 33.6124 8.95292 27.9999 8.95292C21.4254 8.95292 16.0956 14.2827 16.0956 20.8572V25.619H17.0929V25.6191H42.2852C45.5726 25.6191 48.2375 28.284 48.2375 31.5713V45.8565C48.2374 49.1438 45.5726 51.8087 42.2851 51.8087ZM43.4756 32.7618C43.4756 31.4468 42.4097 30.3808 41.0948 30.3808H14.9052C13.5904 30.3808 12.5243 31.4468 12.5243 32.7618V44.666C12.5243 45.9809 13.5904 47.0469 14.9052 47.0469H41.0947C42.4096 47.0469 43.4756 45.9809 43.4756 44.666L43.4756 32.7618Z" fill="url(#paint0_linear_279_4708)" />
						<defs>
							<linearGradient id="paint0_linear_279_4708" x1="7.7627" y1="27.9999" x2="48.2375" y2="27.9999" gradientUnits="userSpaceOnUse">
								<stop stop-color="#4757E6" />
								<stop offset="0.765" stop-color="#8E54E9" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div className={'authorization__text'}>
					<p>You will receive a link to restore password to the specified email address</p>
				</div>
				<Formik
					initialValues={initialValue}
					validate={values => {
						const errors = {}
						if (!values.email) {
							// @ts-ignore
							errors.email = 'Required'
						}
						if (!values.newPassword) {
							// @ts-ignore
							errors.newPassword = 'Required'
						}
						if (!values.repeatPassword) {
							// @ts-ignore
							errors.repeatPassword = 'Required'
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
							{step === 1 && (
								<>
									<InputField name={'email'} placeholder='Email' />
									<ButtonBorderGradient onClick={() => {
										if (!values.email) {
											return
										} else {
											setStep(2)
										}

									}} type='submit' formBtn={true} name={'send'} />
								</>
							)}
							{step === 2 && (

								<>
									<InputField name={'new-password'}
										placeholder='New password' />
									<InputField name={'repeat-password'}
										placeholder='Repeat Password' />
									<ButtonBorderGradient onClick={() => router.push('/dashboard')}
										formBtn={true} name={'Change'} />
								</>
							)}

						</form>
					)}
				</Formik>
			</div>
		</div>
	</div >
}

export default Restore