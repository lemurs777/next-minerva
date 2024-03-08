'use client'
import Upliner from '@/components/PersonalArea/Upliner'
import { Context } from '@/utils/context/Context'

export default function AffiliateLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Context>

			<div className='affiliate area-content'>
				<div className="container">
					<div className="affiliate__grid area-grid">
						<div className="affiliate__aside">
							<Upliner />
						</div>
						<div className="affiliate__main">
							{children}
						</div>
					</div>
				</div>
			</div>
		</Context>
	)
}