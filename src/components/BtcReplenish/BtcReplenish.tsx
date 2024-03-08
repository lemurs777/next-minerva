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
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
							<path opacity="0.4" d="M16.7294 18.55H3.27103C2.95436 18.55 2.6377 18.3125 2.6377 17.9167C2.6377 17.5208 2.8752 17.2833 3.27103 17.2833H16.7294C17.046 17.2833 17.3627 17.5208 17.3627 17.9167C17.3627 18.3125 17.046 18.55 16.7294 18.55Z" fill="currentColor" />
							<path d="M15.5421 14.9084C15.3837 14.9084 15.2254 14.8292 15.1462 14.75L4.06289 3.66669C3.82539 3.42919 3.82539 3.11252 4.06289 2.87502C4.30039 2.63752 4.69622 2.63752 4.93372 2.87502L16.0171 13.9584C16.2546 14.1959 16.2546 14.5917 16.0171 14.8292C15.8587 14.9084 15.7004 14.9084 15.5421 14.9084Z" fill="currentColor" />
							<path d="M4.45853 11.9792C4.14186 11.9792 3.8252 11.7417 3.8252 11.3458V3.27085C3.8252 2.95418 4.0627 2.63751 4.45853 2.63751H12.6127C12.9294 2.63751 13.246 2.87501 13.246 3.27085C13.246 3.66668 13.0085 3.90418 12.6127 3.90418H5.09186V11.425C5.09186 11.7417 4.7752 11.9792 4.45853 11.9792Z" fill="currentColor" />
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