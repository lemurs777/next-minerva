'use client'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import styles from './Modal.module.scss'
import useClickOutside from '@/hooks/useClickOutside'
import clsx from 'clsx'
// Определение типов пропсов
interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: ReactNode
	className?: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, className, children }) => {
	const modalRef = useRef(null)
	// Внутренний стейт для отслеживания видимости модального окна
	const [modalVisible, setModalVisible] = useState(isOpen)

	// Обработчик закрытия модального окна
	const handleClose = () => {
		setModalVisible(false)
		onClose()
	}

	// Обновление видимости модального окна при изменении isOpen
	if (isOpen !== modalVisible) {
		setModalVisible(isOpen)
	}
	useClickOutside(modalRef, handleClose)
	useEffect(() => {
		if (modalVisible) {

			// Добавить класс при открытии модального окна
			document.body.classList.add('lock')
		} else {


			// Удалить класс при закрытии модального окна

			document.body.classList.remove('lock')
		}

	}, [modalVisible])
	// Рендер компонента модального окна
	return (
		<>
			{modalVisible && (
				<div className={styles.modal} >
					<div className={clsx(className, styles.modal__wrapper)} ref={modalRef}>{children}
					</div>
				</div>
			)}
		</>
	)
}

export default Modal
