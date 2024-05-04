import InvestmentBlock from '@/components/InvestmentBlock/InvestmentBlock'
import React from 'react'
import { botCards } from '../../../../public/db/botCards'
import BotCard from '@/components/BotCard/BotCard'
import Frame from '@/components/Frame'
import PoolInfo from '@/components/PoolInfo/PoolInfo'

function page() {
	return (
		<div className='page-content'>
			<div className="container">
		<PoolInfo/>
			</div>
		</div>
	)
}

export default page