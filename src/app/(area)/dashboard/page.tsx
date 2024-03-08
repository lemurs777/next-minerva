import BalanceDynamic from '@/components/BalanceDynamic'
import LatestActivities from '@/components/LatestActivities'
import Basic from '@/components/PersonalArea/Basic'
import NewInvestmentActivation from '@/components/PersonalArea/NewInvestmentActivation'
import StatusUser from '@/components/PersonalArea/StatusUser'

const DashboardPage = () => {
	return (
		<div className='dashboard page-content'>
			<div className="container">
				<div className="dashboard__grid">
					<StatusUser />
					<BalanceDynamic />
					<NewInvestmentActivation />
					<LatestActivities />
					<Basic />
				</div>
			</div>
		</div>
	)
}

export default DashboardPage