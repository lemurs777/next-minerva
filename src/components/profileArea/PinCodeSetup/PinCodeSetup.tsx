import Frame from '@/components/Frame'
import FaModal from '@/components/modals/FaModal'
import FaModalSuccess from '@/components/modals/FaModalSuccess'
import PinModal from '@/components/modals/PinModal'
import ButtonBorderGradient from '@/components/ui/buttons/ButtonBorderGradient'
import googleAuth from '@/images/google-auth.png'
import pinCodeAuth from '@/images/grid-lock.svg'
import Image from 'next/image'
import { useState } from 'react'
import styles from './PinCodeSetup.module.scss'

const PinCodeSetup = () => {
	const [faSetup, setFaSetup] = useState(false)
	const [pinCodeSetup, setPinCodeSetup] = useState(false)
	const [faSuccess, setFaSuccess] = useState(false)
	const [pinCodeSuccess, setPinCodeSuccess] = useState(false)
	return <>

		<div className={styles.auth}>
			<div className={styles.auth__grid}>
				<Frame className={styles.item}>
					<div className={styles.item__header}>
						<div className={styles.item__title}>Google Authenticator</div>
					</div>
					<div className={styles.item__icon}>
						<Image src={googleAuth} alt={'google auth'} />
					</div>
					<div className={styles.item__text}>
						<p>An additional layer of security for your account. Once activated, it generates time-sensitive codes that you&apos;ll enter along with your password during login. By enabling Google Authenticator, you&apos;re enhancing the security of your personal information and ensuring that only you can access your account, even if someone else has your password.</p>
					</div>
					<div className={styles.item__btns}>
						<ButtonBorderGradient
							formBtn={true}
							onClick={() => setFaSetup(true)}
							className={styles.item__btn} name={'activate'} />
					</div>
				</Frame>
				<Frame className={styles.item}>
					<div className={styles.item__header}>
						<div className={styles.item__title}>Pin-Code</div>
					</div>
					<div className={styles.item__icon}>
						<Image src={pinCodeAuth} alt={'pin-code'} />
					</div>
					<div className={styles.item__text}>
						<p>A six-digit PIN code is a personalized numeric password that serves as an added layer of security when withdrawing funds from your personal account. This PIN enhances the overall security of your financial transactions, providing you with increased confidence and control over the safety of your funds.</p>
					</div>
					<div className={styles.item__btns}>
						<ButtonBorderGradient
							onClick={() => setPinCodeSetup(true)}
							className={styles.item__btn} name={'activate'}
							formBtn={true}
						/>
					</div>
				</Frame>
			</div>
		</div>
		{/* Modals */}

		<FaModal isOpen={faSetup} onClose={() => {
			setFaSetup(false)
		}} onClick={() => {
			setFaSetup(false)
			const timeoutId = setTimeout(() => {
				setFaSuccess(true)
			}, 300)
			return () => clearTimeout(timeoutId)
		}} />
		<PinModal isOpen={pinCodeSetup} onClose={() => {
			setPinCodeSetup(false)
		}} onClick={() => {
			setPinCodeSetup(false)
			const timeoutId = setTimeout(() => {
				setPinCodeSuccess(true)
			}, 300)
			return () => clearTimeout(timeoutId)
		}} />
		<FaModalSuccess authName={'2fa'} icon={googleAuth} onClose={() => setFaSuccess(false)} onClick={() => setFaSuccess(false)} isOpen={faSuccess} />
		<FaModalSuccess authName={'PIN-Code'} icon={pinCodeAuth} onClose={() => setPinCodeSuccess(false)} onClick={() => setPinCodeSuccess(false)} isOpen={pinCodeSuccess} />
	</>
}

export default PinCodeSetup