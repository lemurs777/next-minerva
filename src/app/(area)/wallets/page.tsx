'use client'
import instance from '@/api/api'
import AddWallet from '@/components/PersonalArea/AddWallet'
import WalletItem from '@/components/WalletItem'
import WalletModal from '@/components/modals/WalletModal'
import { useEffect, useState } from 'react'

const WalletPage = () => {
	const [walletsList, setWalletsList] = useState([])
	const [showWalletModal, setShowWalletModal] = useState(false)
	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await instance.get('/db/myWallets.json')
				setWalletsList(data)


			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
		fetchData()
	}, [])

	return (
		<>
			<div className="wallets page-content">
				<div className="container">
					<div className="wallets__grid">
						{walletsList.map((wallet, index) => (
							<WalletItem key={index} />
						))}
						<AddWallet onClick={() => setShowWalletModal(true)} />
					</div>
				</div>
			</div>
			<WalletModal isOpen={showWalletModal} onClose={() => setShowWalletModal(false)} />
		</>
	)
}

export default WalletPage