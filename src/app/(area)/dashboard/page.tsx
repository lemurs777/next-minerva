import BalanceDynamic from '@/components/BalanceDynamic'
import LatestActivities from '@/components/LatestActivities'
import Basic from '@/components/PersonalArea/Basic'
import NewInvestmentActivation from '@/components/PersonalArea/NewInvestmentActivation'
import StatusUser from '@/components/PersonalArea/StatusUser'

const DashboardPage = () => {
	return (
		<div className='dashboard page-content'>
			<div className="container">
				<div className="row">
					<div className="dashboard__grid">
						<div className="dashboard__aside">
							<StatusUser />
						</div>
						<div className="dashboard__main">
							<BalanceDynamic />
						</div>
					</div>
					<div className="dashboard__grid dashboard__grid--table">
						<div className="dashboard__aside">
							<NewInvestmentActivation />
						</div>
						<div className="dashboard__main">
							<LatestActivities />
						</div>
					</div>
					<div className="dashboard__grid dashboard__grid--basic">
						<Basic />
					</div>
				</div>
			</div>
		</div >
	)
}

export default DashboardPage