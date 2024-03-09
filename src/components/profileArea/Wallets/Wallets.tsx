import Frame from '@/components/Frame'
import styles from './Wallets.module.scss'
import ButtonBorderGradient from '@/components/ui/buttons/ButtonBorderGradient'
import { wallets } from '@/db/wallets'
import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'

const Wallets = () => {

	const [checked, setChecked] = useState<number | null>(null)

	return <Frame className={styles.wallets}>
		<div className={styles.wallets__title}>Your cryptocurrency addresses for quick withdrawals</div>
		<div className={styles.wallets__list}>
			{wallets.map((wallet) => (
				// <button type='button'
				// 	onClick={() => {
				// 		setChecked(wallet.id)
				// 	}}
				// 	className={clsx(checked === wallet.id ? styles.active : '', styles.wallet)}
				// 	key={wallet.id}>
				// 	<div className={styles.wallet__icon}><Image width={22} height={22} src={wallet.icon} alt={wallet.title} /></div>
				// 	<div className={styles.wallet__title}>{wallet.title}</div>
				// </button>
				<label key={wallet.id}
					className={styles.wallet}>
					<input type="text" placeholder={wallet.title} />
				</label>
			))}
		</div>
		<div className={styles.wallets__bottom}>
			<ButtonBorderGradient className={styles.wallets__btn} name={'save changes'} />
		</div>
	</Frame>
}

export default Wallets