import BalanceDynamic from '@/components/BalanceDynamic'
import LatestActivities from '@/components/LatestActivities'
import Basic from '@/components/PersonalArea/Basic'
import NewInvestmentActivation from '@/components/PersonalArea/NewInvestmentActivation'
import StatusUser from '@/components/PersonalArea/StatusUser'

const DashboardPage = () => {
	return (
		<div className='dashboard page-content'>
			<div className="container">
				{/* <div className="dashboard__grid"> */}
				<div className="row">
					<div className="dashboard__grid">
						<div className="dashboard__aside">
							<StatusUser />
							{/* <NewInvestmentActivation /> */}
							{/* <Basic /> */}
						</div>
						<div className="dashboard__main">
							<BalanceDynamic />
							{/* <LatestActivities /> */}

						</div>
					</div>
					<div className="dashboard__grid">
						<div className="dashboard__aside">
							{/* <StatusUser /> */}
							<NewInvestmentActivation />
							{/* <Basic /> */}
						</div>
						<div className="dashboard__main">
							{/* <BalanceDynamic /> */}
							<LatestActivities />

						</div>
					</div>
					<div className="dashboard__grid">
						<div className="dashboard__aside">
							{/* <StatusUser /> */}
							{/* <NewInvestmentActivation /> */}
							<Basic />
						</div>
						<div className="dashboard__main">
							{/* <BalanceDynamic /> */}
							{/* <LatestActivities /> */}

						</div>
					</div>
				</div>
			</div>
		</div >
	)
}

export default DashboardPage