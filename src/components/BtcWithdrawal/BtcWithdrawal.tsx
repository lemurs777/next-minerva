'use client'
import spinner from '@/images/spinner.svg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import BtcWindow from '../BtcWindow/BtcWindow'
import ButtonBorderGradient from '../ui/buttons/ButtonBorderGradient'
import ButtonGradient from '../ui/buttons/ButtonGradient'
import PinCode from '../ui/forms/PinCode'
import styles from './BtcWithdrawal.module.scss'
const BtcWithdrawal = () => {

	const [step, setStep] = useState(1)
	const router = useRouter()
	const [complete, setComplete] = useState(false)

	const handleNext = () => {
		setStep(step + 1)
	}

	const handlePrev = () => {
		setStep(step - 1)
	}
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [step])
	return <>
		{
			step === 1 && (
				<BtcWindow
					onClick={() => { router.push('/wallets') }}
					className={styles.block} title={'btc withdrawal'}>
					<div className={styles.block__inner}>
						<div className={styles.block__text}>
							<p>Insert wallet address for BTC withdrawal. Make sure the address entered is correct. In case of error, funds will be lost forever</p>
						</div>
						<div className={styles.block__input}>
							<input type="text" placeholder='Amount BTC' />
							<button className={styles.block__btn}>MAX</button>
						</div>
						<div className={styles.block__input}>
							<input type="text" placeholder='Enter your wallet address' />
							<button className={styles.block__btn}>Last
								Used</button>
						</div>
						<PinCode label='Enter Pin-code' counter={6} />
						<PinCode label='2fa 6-digit code' counter={6} />

						<ButtonGradient
							onClick={handleNext}
							className={styles.block__btnAction} name={'Create an invoice'} />
					</div>
				</BtcWindow>
			)}
		{step === 2 && (
			<BtcWindow
				onClick={handlePrev}
				className={styles.block} title={'btc withdrawal'}>
				<div className={styles.block__inner}>
					<div className={styles.block__text}>
						<p>All withdrawal requests are processed automatically and are instantly sent to your wallet after the first confirmation in the blockchain</p>
					</div>
					<div className={styles.info}>
						<ul className={styles.info__list}>
							<li className={styles.info__item}><b>Network:</b> BTC</li>
							<li className={styles.info__item}><b>Wallet address: </b>1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71</li>
							<li className={styles.info__item}><b>Amount:</b> 0.1 BTC</li>
							<li className={styles.info__item}><b>Commission:</b> 0.001 BTC</li>
							<li className={styles.info__item}><b>You receive:</b> 0.099999</li>
						</ul>
					</div>
					<div className={styles.btns}>
						<ButtonBorderGradient
							onClick={() => setStep(1)}
							name={'cancel'} darkText={true} className={styles.btnBorder} />
						<ButtonGradient
							onClick={() => {
								setStep(step + 1)
								const timeoutId = setTimeout(() => {
									setComplete(true)
								}, 2000)
								return () => clearTimeout(timeoutId)
							}}
							className={styles.block__btnAction} name={'Confirm and withdraw'} />
					</div>
				</div>
			</BtcWindow>
		)}
		{step === 3 && (
			<BtcWindow backBtn={false} className={styles.block} title={'btc withdrawal'}>
				<div className={styles.block__sending}>
					<div className={styles.block__text}>
						<p>Thank you, your application has been processed. <br />
							Status: {!complete ? <span className={styles.sending}>Sending</span> : <span className={styles.complete}>Completed</span>}</p>
					</div>
					<div className={clsx(!complete && styles.active, styles.block__spinner)}>
						<Image src={spinner} alt={'spinner'} />
					</div>
					<div className={styles.block__tid}>
						<span>TXID:</span>
						<Link href={'#'}>https://blockchair.com/bitcoin/transaction/449b72591e89672cdac5edb5d8556c512b82dfc80d73cebcf7b14bd83b2fe6e5</Link>
					</div>
				</div>
			</BtcWindow>
		)}

	</>
}

export default BtcWithdrawal