'use client'
import Notifications from '@/components/profileArea/Notifications'
import PasswordChange from '@/components/profileArea/PasswordChange/PasswordChange'
import PersonalInfo from '@/components/profileArea/PersonalInfo'
import PinCodeSetup from '@/components/profileArea/PinCodeSetup'
import Wallets from '@/components/profileArea/Wallets/Wallets'
import { CustomContext } from '@/utils/context/Context'
import { useContext } from 'react'

const ProfilePage = () => {

	const { changeProfileTab }: any = useContext(CustomContext)
	return (
		<>

			{changeProfileTab === 'personal-info' ? (
				<PersonalInfo />
			) : changeProfileTab === 'pin-code-setup' ? (

				<PinCodeSetup />
			) : changeProfileTab === 'password-change' ? (
				<PasswordChange />
			) : changeProfileTab === 'notifications' ? (

				<Notifications />
			) : changeProfileTab === 'wallets' ? (

				<Wallets />
			) : null}
		</>
	)
}

export default ProfilePage