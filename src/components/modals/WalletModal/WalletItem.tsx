import { IWallet } from '@/interfaces/wallet'
import styles from './WalletModal.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'
const WalletItem = (wallet: IWallet) => {
	const [selected, setSelected] = useState(false)
	const checkHandler = () => {
		setSelected(!selected)
	}
	return (
		<li className={clsx(selected && styles.selected, styles.wallet)} key={wallet.title}
			onClick={checkHandler}
		>
			<div className={styles.wallet__img}>
				<Image fill={true} src={wallet.icon} alt={wallet.title} />
			</div>
			<div className={styles.wallet__title}>{wallet.title}</div>
		</li>
	)
}

export default WalletItem