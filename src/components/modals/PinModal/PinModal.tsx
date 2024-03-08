import Image from 'next/image'
import Modal from '../Modal'
import styles from './PinModal.module.scss'
import qrImg from '../../../images/qr.png'
import ButtonBorderGradient from '@/components/ui/buttons/ButtonBorderGradient'
import { useState } from 'react'
import PinCode from '@/components/ui/forms/PinCode'
type Props = {
	isOpen?: any
	onClose?: any
	onClick?: () => void
}
const PinModal = ({ isOpen, onClose, onClick }: Props) => {
	return <Modal isOpen={isOpen} onClose={onClose} className={styles.modal} >
		<div className={styles.modal__block}>
			<div className={styles.modal__title}>PIN-Code Setup</div>
			<div className={styles.modal__text}>
				<p>Before withdrawing funds from your personal account, you must activate your PIN-Code. Follow the instructions below to activate</p>
			</div>
			<PinCode className={styles.modal__pin} label='Enter Pin-code' counter={6} />
			<PinCode className={styles.modal__pin} label='Repeat Pin-code' counter={6} />
			<div className={styles.modal__input}>
				<label>
					<span>Enter your password</span>
					<input type="password" placeholder='Enter password' />
				</label>
			</div>
			<ButtonBorderGradient onClick={onClick} name={'activate'} formBtn={true} />
		</div>

	</Modal>
}

export default PinModal