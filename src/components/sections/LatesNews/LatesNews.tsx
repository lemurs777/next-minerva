import Title from '@/components/Title'
import styles from './LatesNews.module.scss'
import news1 from '../../../../public/images/news/news-1.jpg'
import news2 from '../../../../public/images/news/news-2.jpg'
import news3 from '../../../../public/images/news/news-3.jpg'
import ButtonGradient from '@/components/ui/buttons/ButtonGradient'
import NewsItem from './NewsItem'
const items = [
	{
		link: '/1',
		image: news1,
	},
	{
		link: '/2',
		image: news2,
	},
	{
		link: '/3',
		image: news3,
	},
]
const LatesNews = () => {
	return (
		<section className={styles.news}>
			<div className={styles.news__head}>
				<Title title='latest' titleAccent='news' />
			</div>
			<div className={styles.news__body}>
				<ul className={styles.news__list}>
					{items.map((item, index) => (
						<li key={index}>
							<NewsItem link={item.link} image={item.image} />
						</li>
					))}
				</ul>
			</div>
			<div className={styles.news__bottom}>
				<ButtonGradient
					name={'Go to blog'}
					link='/blogs'
					className={styles.news__btn}
					size='small'
				/>
			</div>
		</section>
	)
}

export default LatesNews
