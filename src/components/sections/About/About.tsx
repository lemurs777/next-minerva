import Title from '@/components/Title'
import Video from '../../video/Video'
import styles from './About.module.scss'
const About = () => {
	return (
		<div className={styles.about}>
			<div className={styles.about__inner}>
				<div className={styles.about__content}>
					<Title
						className={styles.about__title}
						title='about'
						titleAccent='us'
					/>
					<div className={styles.about__text}>
						<p>
							Minerva is a trading bot based on artificial intelligence that
							generates profits from trading on the cryptocurrency market.
						</p>
					</div>
				</div>
				<div className={styles.about__video}>
					<Video />
				</div>
			</div>
		</div>
	)
}
export default About
