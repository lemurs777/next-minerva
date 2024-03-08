import { IModalSuccessAuth } from '@/interfaces/modals'
import Modal from '../Modal'
import styles from './FaModalSuccess.module.scss'
import Image from 'next/image'
import ButtonBorderGradient from '@/components/ui/buttons/ButtonBorderGradient'
import clsx from 'clsx'

const FaModalSuccess = ({ isOpen, onClose, authName, icon, onClick }: IModalSuccessAuth) => {
	return <Modal className={styles.modal} isOpen={isOpen} onClose={onClose} >
		<div className={styles.modal__inner}>
			<div className={styles.modal__header}>
				<div className={clsx('title18', styles.modal__title)}>{authName}&nbsp;has been successful activated!</div>
			</div>
			<div className={styles.modal__icon}>
				<Image src={icon} alt={authName} />
			</div>
			<ButtonBorderGradient formBtn={true} onClick={onClick} name={'back to profile'} />
		</div>
	</Modal>
}

export default FaModalSuccess