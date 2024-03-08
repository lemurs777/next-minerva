import clsx from 'clsx'
import styles from './ProjectStats.module.scss'
import replenishImg from '@/images/icons/replenished.svg'
import withdrawnImg from '@/images/icons/withdrawn.svg'
import peopleImg from '@/images/icons/people-active.svg'
import timeImg from '@/images/icons/time.svg'
import Image from 'next/image'
const list = [
	{ sum: '54231$', type: 'invested', icon: replenishImg },
	{ sum: '12340$', type: 'withdrawn', icon: withdrawnImg },
	{ sum: '1582', type: 'users', icon: peopleImg },
	{ sum: '32', type: 'DAYS ONLINE', icon: timeImg },
]
const ProjectStats = () => {
	return (
		<div className={styles.stats}>
			<div className={styles.stats__head}>
				<div className={styles.stats__label}>project stats</div>
			</div>
			<div className={styles.stats__body}>
				<ul className={styles.stats__list}>
					{list.map(item => (
						<li className={styles.item} key={item.type}>
							<div className={clsx('home-title', styles.item__count)}>{item.sum}</div>
							<div className={styles.item__line}>
								<div className={styles.item__name}>{item.type}</div>
								<div className={styles.item__icon}><Image width={16} height={16} src={item.icon} alt={item.type} /></div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default ProjectStats
