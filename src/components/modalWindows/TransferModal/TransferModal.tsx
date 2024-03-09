import ButtonGradient from '@/components/ui/buttons/ButtonGradient'
import ModalWindow from '../ModalWindow'
import styles from './TransferModal.module.scss'
import CurrencySelect from '@/components/ui/CurrencySelect'
import { currency } from '../../../../public/db/currency-table'
import PinCode from '@/components/ui/forms/PinCode'
type Props = {
	showModal: boolean
}
const TransferModal = ({ showModal }: Props) => {

	return <ModalWindow showModal={showModal} title={'transfer to wallets'}>
		<div className={styles.modal}>
			<form className={styles.form}>
				<div className={styles.modal__text}>
					<p>Select a cryptocurrency, fill out the remaining fields to transfer the available amount from your bonus balance to wallet</p>
				</div>
				<div className={styles.form__input}>
					<CurrencySelect currencies={currency} placeholder={'Currency'} />
				</div>
				<div className={styles.form__input}>
					<input type="number" placeholder='Amount' />
					<button type="button" className={styles.form__inputBtn}>MAX</button>
				</div>
				<div className={styles.form__otp}>
					<PinCode counter={6} label='Enter Pin-code' />
				</div>
				<div className={styles.form__bottom}>

					<ButtonGradient name={'Transfer'} className={styles.form__submit} />
				</div>
			</form>
		</div>
	</ModalWindow>
}

export default TransferModal