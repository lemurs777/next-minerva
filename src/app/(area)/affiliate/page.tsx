'use client'
import Table from '@/components/PersonalArea/Table/Table'
import Upliner from '@/components/PersonalArea/Upliner'
import { table } from '../../../../public/db/affiliateTable'
import { useContext } from 'react'
import { CustomContext } from '@/utils/context/Context'
import TransferModal from '@/components/modalWindows/TransferModal/TransferModal'

export default function AffiliatePage() {
	const { showTransfer }: any = useContext(CustomContext)
	return (
		<>
			{/* <div className='affiliate area-content'>
				<div className="container">
					<div className="affiliate__grid area-grid">
						<div className="affiliate__aside">
							<Upliner />
						</div> */}
			<div className="affiliate__main">
				{
					showTransfer && <TransferModal showModal={showTransfer} />
				}
				{!showTransfer && (
					<>
						<Table />
						<Table data={table} />
					</>
				)}
			</div>
			{/* </div>
				</div>
			</div> */}
		</>
	)
}

