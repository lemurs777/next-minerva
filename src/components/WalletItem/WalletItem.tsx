import walletIcon from '@/images/wallets/btc.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Frame from '../Frame'
import ButtonBorderGradient from '../ui/buttons/ButtonBorderGradient'
import styles from './WalletItem.module.scss'
const WalletItem = () => {
	const router = useRouter()
	return <Frame className={styles.wallet}>
		<div className={styles.wallet__icon}>
			<Image src={walletIcon} alt={'wallet'} />
		</div>
		<div className={styles.wallet__info}>
			<div className={styles.wallet__sum}>0.0000000</div>
			<div className={styles.wallet__name}>btc</div>
		</div>
		<div className={styles.wallet__btns}>
			<ButtonBorderGradient name='withdraw'

				onClick={() => {
					router.push('/replenishment')
				}}
				className={styles.wallet__btn}
			>
				<div className={styles.wallet__btnIcon}>
					<svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
						<path d="M15.0421 14.9084C14.8837 14.9084 14.7254 14.8292 14.6462 14.75L3.56289 3.66669C3.32539 3.42919 3.32539 3.11252 3.56289 2.87502C3.80039 2.63752 4.19622 2.63752 4.43372 2.87502L15.5171 13.9584C15.7546 14.1959 15.7546 14.5917 15.5171 14.8292C15.3587 14.9084 15.2004 14.9084 15.0421 14.9084Z" fill="currentColor" />
						<path d="M3.95853 11.9792C3.64186 11.9792 3.3252 11.7417 3.3252 11.3458V3.27085C3.3252 2.95418 3.5627 2.63751 3.95853 2.63751H12.1127C12.4294 2.63751 12.746 2.87501 12.746 3.27085C12.746 3.66668 12.5085 3.90418 12.1127 3.90418H4.59186V11.425C4.59186 11.7417 4.2752 11.9792 3.95853 11.9792Z" fill="currentColor" />
					</svg>
				</div>
			</ButtonBorderGradient>
			<ButtonBorderGradient

				onClick={() => {
					router.push('/withdrawal')
				}}
				name='replenish' className={styles.wallet__btn}>
				<div className={styles.wallet__btnIcon}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M18.9996 18.2C19.1996 18.2 19.3996 18.1 19.4996 18C19.7996 17.7 19.7996 17.2 19.4996 16.9L5.49961 2.89999C5.19961 2.59999 4.69961 2.59999 4.39961 2.89999C4.09961 3.19999 4.09961 3.69999 4.39961 3.99999L18.3996 18C18.5996 18.2 18.7996 18.2 18.9996 18.2Z" fill="currentColor" />
						<path d="M8.6998 18.2H18.9998C19.3998 18.2 19.7998 17.9 19.7998 17.4V7.19996C19.7998 6.79996 19.4998 6.39996 18.9998 6.39996C18.4998 6.39996 18.1998 6.69996 18.1998 7.19996V16.7H8.6998C8.2998 16.7 7.8998 17 7.8998 17.5C7.8998 18 8.2998 18.2 8.6998 18.2Z" fill="currentColor" />
					</svg>
				</div>
			</ButtonBorderGradient>
		</div>
	</Frame>
}

export default WalletItem