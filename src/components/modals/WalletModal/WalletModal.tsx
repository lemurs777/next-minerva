import instance from '@/api/api'
import { useEffect, useState } from 'react'
import Modal from '../Modal'
import styles from './WalletModal.module.scss'
import { IWallet } from '@/interfaces/wallet'

import ButtonBorderGradient from '@/components/ui/buttons/ButtonBorderGradient'
import OkIcon from '@/components/icons/OkIcon'
import WalletItem from './WalletItem'
type Props = {
	isOpen: boolean
	onClose: () => void
}
const WalletModal = ({ isOpen, onClose }: Props) => {
	const [wallets, setWallets] = useState<IWallet[]>([])

	const buttonAddHandler = () => {
		onClose()
	}
	useEffect(() => {
		const fetchData = async () => {
			try {
				// Make a request using the configured Axios instance
				const { data } = await instance.get('/db/wallets.json')
				setWallets(data)

			} catch (error) {
				// Handle the error
				console.error('Error fetching data in YourComponent:', error)
			}
		}

		fetchData()
	}, [])

	return <Modal isOpen={isOpen} onClose={onClose}>
		<div className={styles.content}>
			<ul className={styles.content__list}>
				{wallets.map(wallet => (
					<WalletItem key={wallet.title} icon={wallet.icon} title={wallet.title} />
				))}
			</ul>
			<div className={styles.content__bottom}>
				<ButtonBorderGradient
					onClick={buttonAddHandler}
					className={styles.content__btn} name='activate 
				selected wallets'>

					<OkIcon />
				</ButtonBorderGradient>
			</div>
		</div>
	</Modal>
}

export default WalletModal