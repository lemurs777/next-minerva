'use client'

import { useState, useRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import styles from './Language.module.scss'

import enImg from '@/images/flags/en.jpg'
import frImg from '@/images/flags/fr.png'
import esImg from '@/images/flags/es.png'
import phImg from '@/images/flags/ph.png'
import hiImg from '@/images/flags/hi.png'
import huImg from '@/images/flags/hu.png'
import chImg from '@/images/flags/ch.png'
import nlImg from '@/images/flags/nl.png'
import useClickOutside from '@/hooks/useClickOutside'

const Language = () => {
	const [showLanguage, setShowLanguage] = useState(false)
	const languageList = [
		{
			value: 'EN',
			icon: enImg,
		},
		{
			value: 'FR',
			icon: frImg,
		},
		{
			value: 'es',
			icon: esImg,
		},
		{
			value: 'ph',
			icon: phImg,
		},
		{
			value: 'hi',
			icon: hiImg,
		},
		{
			value: 'hu',
			icon: huImg,
		},
		{
			value: 'CH',
			icon: chImg,
		},
		{
			value: 'nl',
			icon: nlImg,
		},
	]
	const [language, setLanguage] = useState(languageList[0].icon)
	const languageRef = useRef(null)
	useClickOutside(languageRef, () => {
		setShowLanguage(false)
	})
	return (
		<div className={styles.language} ref={languageRef}>
			<button
				className={styles.language__btn}
				onClick={() => setShowLanguage(!showLanguage)}
			>
				<Image src={language} alt={'language'} />
			</button>

			<div
				className={clsx(
					showLanguage && styles.active,
					styles.language__dropdown
				)}
			>
				<ul className={styles.language__list}>
					{languageList.map(item => (
						<li
							className={styles.item}
							key={item.value}
							onClick={() => {
								setLanguage(item.icon)
								setShowLanguage(false)
							}}
						>
							<div className={styles.item__name}>{item.value}</div>
							<div className={styles.item__img}>
								<Image src={item.icon} alt={item.value} fill={true} />
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
export default Language
