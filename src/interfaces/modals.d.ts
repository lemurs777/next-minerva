import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { ReactNode } from 'react'

export interface IModalWindow {
	children: ReactNode
	title: string
	showModal?: boolean
}
export interface IModal {
	onClose: () => void
	isOpen: boolean
}
export interface IModalSuccessAuth extends IModal {
	authName: string
	icon: any
	onClick?: () => void
}