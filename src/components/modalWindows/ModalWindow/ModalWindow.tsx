import { IModalWindow } from '@/interfaces/modals'
import styles from './ModalWindow.module.scss'
import BackIcon from '@/components/icons/BackIcon'
import useClickOutside from '@/hooks/useClickOutside'
import { useContext, useRef } from 'react'
import clsx from 'clsx'
import { CustomContext } from '@/utils/context/Context'

const ModalWindow = ({ children, title }: IModalWindow) => {
	const { showTransfer, setShowTransfer }: any = useContext(CustomContext)

	const modalRef = useRef(null)
	useClickOutside(modalRef, () => { setShowTransfer(false) })
	return <div className={clsx(showTransfer && styles.open, styles.modal)} >
		<div className={(styles.modal__content)} ref={modalRef}>
			<div className={styles.modal__header}>
				<button type="button" className={styles.modal__back}
					onClick={() => setShowTransfer(false)}
				><BackIcon /></button>
				<div className={styles.modal__headerTitle}>
					<div className={styles.modal__title}>{title}</div>
				</div>
			</div>
			<div className={styles.modal__body}>
				{children}
			</div>
		</div>
	</div>
}

export default ModalWindow