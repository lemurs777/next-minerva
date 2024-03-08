'use client'
import { items } from '@/components/ProfileAside/ProfileAside'
import { createContext, useState } from 'react'
// @ts-ignore
export const CustomContext = createContext()

export const Context = (props: any) => {
	const [changeProfileTab, setChangeProfileTab] = useState(items[0].anchor)
	const [isOpen, setIsOpen] = useState(false)
	const [showTransfer, setShowTransfer] = useState(false)

	const value = {
		isOpen,
		setIsOpen,
		changeProfileTab,
		setChangeProfileTab,
		showTransfer,
		setShowTransfer
	}
	return <CustomContext.Provider value={value}>{props.children}</CustomContext.Provider>
}