'use client'
import Frame from '@/components/Frame'
import useClickOutside from '@/hooks/useClickOutside'
import avatar from '@/images/avatars/avatar-1.svg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import styles from './Profile.module.scss'

const Profile = () => {
	const menuRef = useRef(null)
	const [showMenu, setShowMenu] = useState(false)
	useClickOutside(menuRef, () => setShowMenu(false))
	return <div className={styles.profile} ref={menuRef}>
		<button className={styles.profile__btn}
			onClick={() => setShowMenu(!showMenu)}
			type='button'>
			<div className={styles.profile__avatar}>
				<Image src={avatar} alt={'avatar'} />
			</div>

		</button>
		<div className={clsx(showMenu && styles.show, styles.dropdown)} >
			<Frame className={styles.dropdown__frame}>
				<ul className={styles.dropdown__list}>
					<li onClick={() => setShowMenu(false)}>
						<Link className={styles.dropdown__btn}
							href={'/profile'}>profile</Link>
					</li>
					<li onClick={() => setShowMenu(false)}>
						<button type="button" className={styles.dropdown__btn}>
							Logout
						</button>
					</li>
				</ul>
			</Frame>
		</div>
	</div>
}

export default Profile