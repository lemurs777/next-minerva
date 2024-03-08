import styles from './TotalItem.module.scss'
import replenishedIcon from '@/images/icons/replenished.svg'
import withdrawnIcon from '@/images/icons/withdrawn.svg'
import earnedIcon from '@/images/icons/earned.svg'
import Image from 'next/image'
import Frame from '@/components/Frame'

type Props = {
	title: 'replenished' | 'withdrawn' | 'earned'
	type?: 'replenished' | 'withdrawn' | 'earned'
	price: string
}

const TotalItem = ({ type, title, price }: Props) => {
	return <Frame className={styles.total}>
		<div className={styles.total__icon}>
			<Image src={type === 'replenished' ? replenishedIcon : type === 'earned' ? earnedIcon : type === 'withdrawn' ? withdrawnIcon : ''}
				alt={title ? title : 'icon'} />
		</div>
		<div className={styles.total__content}>
			<div className={styles.total__title}>Total {title}</div>
			<div className={styles.total__sum}>{price}</div>
		</div>
	</Frame>
}

export default TotalItem