import Link from 'next/link'
import styles from './LatesNews.module.scss'
import Image from 'next/image'
import clsx from 'clsx'
type Props = {
	link: string
	image?: any
}
const NewsItem = ({ link, image }: Props) => {
	return (
		<Link className={styles.link} href={link}>
			<Image src={image} alt={'news'} />
			<div className={clsx('btn-gradient', styles.link__label)}>read full</div>
		</Link>
	)
}

export default NewsItem
