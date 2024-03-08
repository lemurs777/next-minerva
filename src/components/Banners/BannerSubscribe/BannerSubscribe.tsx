'use client'
import banner from '@/images/banners/subscrube-banner.png'
import clsx from 'clsx'
import { Formik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import styles from './BannerSubscribe.module.scss'
const BannerSubscribe = () => {
	return (
		<div className={styles.banner}>
			<div className={styles.banner__row}>
				<div className={styles.banner__col}>
					<div className={styles.banner__content}>
						<h3 className={styles.banner__title}>
							we are in <span>touch</span>
						</h3>
						<ul className={styles.banner__links}>
							<li className={styles.link}>
								<Link
									className={styles.link__item}
									href={'mailto:support@miverva.trade'}
								>
									support@miverva.trade
								</Link>
							</li>
							<li className={styles.link}>
								<Link
									className={styles.link__item}
									target='_blank'
									href={'https://t.me/miverva.trade'}
								>
									t.me/miverva.trade
								</Link>
							</li>
						</ul>
						<div className={styles.banner__form}>
							<Formik
								initialValues={{ email: '' }}
								validate={values => {
									const errors = {}
									if (!values.email) {
										// @ts-ignore
										errors.email = 'Required'
									} else if (
										!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
											values.email
										)
									) {
										// @ts-ignore
										errors.email = 'Invalid email address'
									}
									return errors
								}}
								onSubmit={(values, { setSubmitting }) => {
									setTimeout(() => {
										alert(JSON.stringify(values, null, 2))
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
										<input
											className={styles.form__input}
											type='email'
											name='email'
											placeholder='Enter Email'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.email}
										/>
										<div className={styles.form__error}>
											{errors.email && touched.email && errors.email}
										</div>
										<button
											className={clsx('btn-gradient', styles.form__btn)}
											type='submit'
											disabled={isSubmitting}
										>
											SUBSCRIBE
										</button>
									</form>
								)}
							</Formik>
						</div>
					</div>
				</div>
				<div className={styles.banner__col}>
					<div className={styles.banner__img}>
						<Image src={banner} alt='banner' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default BannerSubscribe
