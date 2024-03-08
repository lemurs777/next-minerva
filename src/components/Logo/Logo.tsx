import Image from 'next/image'
import Link from 'next/link'
import styles from './Logo.module.scss'
import logoImg from '../../../public/images/logo.svg'
type Props = {
	color?: 'light' | 'dark'
}
const Logo = ({ color = 'dark' }: Props) => {
	return (
		<Link className={styles.logo} href={'/'}>
			<Image src={logoImg} alt={'logo'} width={38} height={35} />
			<span style={{ color: color === 'dark' ? '#242424' : '#fff' }}>
				minerva
			</span>
		</Link>
	)
}

export default Logo
