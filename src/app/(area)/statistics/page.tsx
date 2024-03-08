import TotalItem from '@/components/PersonalArea/TotalItem'
import StatisticTable from '@/components/StatisticTable'

const page = () => {
	return (
		<div className='statistics page-content'>
			<div className="container">
				<div className="statistics__inner">
					<StatisticTable />
					<div className="statistics__total-items">
						<TotalItem
							price={'0.0000000$'} type='replenished' title='replenished' />
						<TotalItem price={'0.0000000$'} type='withdrawn' title='withdrawn' />
						<TotalItem price={'0.0000000$'} type='earned' title='earned' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default page