'use client'
import '@/assets/styles/globals.scss'
import ProfileAside from '../../../components/ProfileAside'


export default function ProfileLayout({
	children,
}: {
	children: React.ReactNode
}) {


	return (
			<div className='profile page-content'>
				<div className="container">
					<div className="profile__inner">
						<aside className="profile-aside">
							<ProfileAside />
						</aside>
						<div className="profile-main">
							{children}
						</div>
					</div>
				</div>
			</div>
	)
}
