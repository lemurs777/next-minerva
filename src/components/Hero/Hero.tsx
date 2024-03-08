'use client'
import Image from 'next/image'
import decorImg from '@/images/hero-img1.png'
import decorImgMobile from '@/images/hero-img-mobile.png'
import ButtonGradient from '../ui/buttons/ButtonGradient'
import decorSmImg from '@/images/decors/ball-1.png'
import decorLgImg from '@/images/decors/ball-2.png'
import styles from './Hero.module.scss'
import ButtonBorderGradient from '../ui/buttons/ButtonBorderGradient'
import { useState, useEffect } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
const Hero = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
	const breakpoints = {
		isLg: useMediaQuery("(max-width: 1399.98px)"),
		isMd: useMediaQuery("(max-width: 1049.98px)"),
		isMobile: useMediaQuery("(max-width: 767.98px)"),
		active: "SSR",
	}
	useEffect(() => {
		const handleMouseMove = (e: any) => {
			setMousePosition({ x: e.clientX, y: e.clientY })
		}

		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	const calculateParallaxOffset = (factor: any) => {
		const offsetX = mousePosition.x / factor
		const offsetY = mousePosition.y / factor
		return { transform: `translate(${offsetX}px, ${offsetY}px)` }
	}
	return (
		<div className={styles.hero}>
			<div className='container'>
				<div className={styles.hero__decors}>

					<Image src={decorSmImg} alt={'decor'} style={calculateParallaxOffset(15)} />
					<Image src={decorSmImg} alt={'decor'} style={calculateParallaxOffset(20)} />
					<Image src={decorLgImg} alt={'decor'} style={calculateParallaxOffset(25)} />
					<Image src={decorLgImg} alt={'decor'} style={calculateParallaxOffset(15)} />
				</div>
				<div className={styles.hero__inner}>
					<div className={styles.hero__content}>
						<h1 className={styles.hero__title}>
							<span>Minerva </span>- intelligent trading bot that ensures daily
							passive earnings.
						</h1>
						<div className={styles.hero__text}>
							<p>
								Achieve your financial goals with Minerva trading bot, driven by
								advanced artificial intelligence, generating passive income.
							</p>
						</div>
						<div className={styles.hero__btns}>
							<ButtonGradient name='get started'
								className={styles.hero__btn}
								size={!breakpoints.isLg ? 'large' : undefined} />
							<ButtonBorderGradient name='all page' link='/all-pages' className={styles.btnBorderGradient} />
						</div>
					</div>
					<div className={styles.hero__decor}>
						{breakpoints.isMd ? (
							<Image src={decorImgMobile} alt='decor' />

						) : (

							<Image src={decorImg} alt='decor' priority />
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
export default Hero
