import Image from 'next/image'
import styles from './Video.module.scss'
import playImg from '../../../public/images/play.svg'
const Video = () => {
	return (
		<div className={styles.video}>
			<button className={styles.video__play}>
				<Image src={playImg} alt={'play'} />
			</button>
		</div>
	)
}
export default Video
