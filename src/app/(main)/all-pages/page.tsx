'use client'
import FaModal from '@/components/modals/FaModal'
import FaModalSuccess from '@/components/modals/FaModalSuccess'
import WalletModal from '@/components/modals/WalletModal'
import ButtonBorderGradient from '@/components/ui/buttons/ButtonBorderGradient'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import googleAuth from '@/images/google-auth.png'
import pinCodeAuth from '@/images/grid-lock.svg'
import PinModal from '@/components/modals/PinModal'
import { CustomContext } from '@/utils/context/Context'
import { useRouter } from 'next/navigation'
const AllPage = () => {
	const router = useRouter()
	const { setShowTransfer }: any = useContext(CustomContext)
	const [m1, setM1] = useState(false)
	const [m2, setM2] = useState(false)
	const [m3, setM3] = useState(false)
	const [m4, setM4] = useState(false)
	const [m5, setM5] = useState(false)
	return (
		<div className='all-page' style={{ paddingTop: '150px' }}>
			<div className="container">
				<h2>Pages</h2>
				<ul style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
					<li ><Link href={'/login'} className='btn-gradient'>Login</Link></li>
					<li ><Link href={'/registration'} className='btn-gradient'>Registration</Link></li>
					<li ><Link href={'/restore'} className='btn-gradient'>Recovery Password</Link></li>
					<li ><Link href={'/dashboard'} className='btn-gradient'>Dashboard</Link></li>
					<li ><Link href={'/wallets'} className='btn-gradient'>Wallets</Link></li>
					<li ><Link href={'/investments'} className='btn-gradient'>new investment</Link></li>
					<li ><Link href={'/statistics'} className='btn-gradient'>Statistics</Link></li>
					<li ><Link href={'/affiliate-program'} className='btn-gradient'>affiliate program</Link></li>
					<li ><Link href={'/profile'} className='btn-gradient'>Profile</Link></li>
					<li ><Link href={'/replenishment'} className='btn-gradient'>btc replenishment</Link></li>
					<li ><Link href={'/withdrawal'} className='btn-gradient'>btc withdrawal</Link></li>
					<li ><Link href={'/pool'} className='btn-gradient'>Pool Info</Link></li>
				</ul>
				<h2>Modals</h2>
				<ul style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
					<li ><ButtonBorderGradient onClick={() => setM1(true)} name='add wallet'></ButtonBorderGradient></li>
					<li ><ButtonBorderGradient onClick={() => setM2(true)} name='2FA SETUP'></ButtonBorderGradient></li>
					<li ><ButtonBorderGradient onClick={() => setM3(true)} name='2fa has been successful activated!'></ButtonBorderGradient></li>
					<li ><ButtonBorderGradient onClick={() => setM4(true)} name='PIN-Code has been successful activated!'></ButtonBorderGradient></li>
					<li ><ButtonBorderGradient onClick={() => setM5(true)} name='PIN-Code Setup'></ButtonBorderGradient></li>
				</ul>
			</div>

			<WalletModal isOpen={m1} onClose={() => setM1(false)} />
			<FaModal isOpen={m2} onClose={() => setM2(false)} />
			<FaModalSuccess authName={'2fa'} icon={googleAuth} onClose={() => setM3(false)} isOpen={m3} onClick={() => setM3(false)} />
			<FaModalSuccess authName={'PIN-Code'} icon={pinCodeAuth} onClose={() => setM4(false)} isOpen={m4} onClick={() => setM4(false)} />
			<PinModal onClose={() => setM5(false)} isOpen={m5} onClick={() => setM5(false)} />
		</div>
	)
}

export default AllPage