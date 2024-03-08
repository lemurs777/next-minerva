'use client'
import qrCode from '@/images/qr.png'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import BtcWindow from '../BtcWindow/BtcWindow'
import ButtonBorderGradient from '../ui/buttons/ButtonBorderGradient'
import styles from './BtcReplenish.module.scss'
const BtcReplenish = () => {
	const pathname = usePathname()
	const router = useRouter()
	return <BtcWindow onClick={() => { router.push('/wallets') }} className={styles.replenish} title={'btc replenishment'}>
		<div className={styles.replenish__inner}>
			<div className={styles.replenish__text}>
				<p>Copy your personal BTC address and send an amount of at least <b>0.0014163 BTC</b> to it</p>
			</div>
			<div className={styles.replenish__code}>
				<span>1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71</span>
			</div>
			<div className={styles.replenish__btn}>

				<ButtonBorderGradient name={'copy wallet address'} className={styles.replenish__copy}>
					<div className={styles.replenish__btnIcon}>
						<svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
							<path d="M15.0421 14.9084C14.8837 14.9084 14.7254 14.8292 14.6462 14.75L3.56289 3.66669C3.32539 3.42919 3.32539 3.11252 3.56289 2.87502C3.80039 2.63752 4.19622 2.63752 4.43372 2.87502L15.5171 13.9584C15.7546 14.1959 15.7546 14.5917 15.5171 14.8292C15.3587 14.9084 15.2004 14.9084 15.0421 14.9084Z" fill="currentColor" />
							<path d="M3.95853 11.9792C3.64186 11.9792 3.3252 11.7417 3.3252 11.3458V3.27085C3.3252 2.95418 3.5627 2.63751 3.95853 2.63751H12.1127C12.4294 2.63751 12.746 2.87501 12.746 3.27085C12.746 3.66668 12.5085 3.90418 12.1127 3.90418H4.59186V11.425C4.59186 11.7417 4.2752 11.9792 3.95853 11.9792Z" fill="currentColor" />
						</svg>
					</div>
				</ButtonBorderGradient>
			</div>
			<div className={styles.replenish__text}>Or scan QR code</div>
			<div className={styles.replenish__qr}>
				<Image src={qrCode} alt={'qr'} />
			</div>
			<div className={styles.replenish__text}>
				<p>
					Only send <b>BTC</b> to this address. After the first confirmation on the blockchain, your balance will be automatically updated on the Wallets page
				</p>
			</div>
		</div>
	</BtcWindow>
}

export default BtcReplenish