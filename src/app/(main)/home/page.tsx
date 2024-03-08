'use client'
import AffiliateBanner from '@/components/Banners/AffiliateBanner'
import Banner from '@/components/Banners/Banner'
import BannerSubscribe from '@/components/Banners/BannerSubscribe'
import Hero from '@/components/Hero'
import AboutBlock from '@/components/sections/About'
import Advantages from '@/components/sections/Advantages'
import Faq from '@/components/sections/Faq'
import LatesNews from '@/components/sections/LatesNews'
import ProfitCalculation from '@/components/sections/ProfitCalculation'
import ProjectStats from '@/components/sections/ProjectStats'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const HomePage = () => {
	const breakpoints = {
		isMobile: useMediaQuery("(max-width: 767.98px)"),
		active: "SSR",
	}
	return (
		<div className='home-page'>
			<div className="home-page__hero" id='hero'>
				<Hero />
			</div>
			<div className='container'>
				<div className="home-page__about" id='about'>
					<AboutBlock />
				</div>
				<div className='home-page__banner'>
					<Banner />
				</div>
				{breakpoints.isMobile && (
					<div className='home-page__stats-mobile'>
						<ProjectStats />
					</div>
				)}
			</div>
			<div className='section home-page__calc' id='services'>
				<ProfitCalculation />
			</div>
			{!breakpoints.isMobile && (
				<div className='section' id='affiliate'>
					<AffiliateBanner />
				</div>
			)}
			<div className='container'>
				{!breakpoints.isMobile && (
					<div className='section'>
						<ProjectStats />
					</div>
				)}
				<div className="home-page__advantages">
					<Advantages />
				</div>
				{breakpoints.isMobile && (
					<div className='section' id='affiliate'>
						<AffiliateBanner />
					</div>
				)}
				{breakpoints.isMobile && (
					<div className='section'>
						<LatesNews />
					</div>
				)}
				{breakpoints.isMobile && (
					<BannerSubscribe />

				)}
				<div className='home-page__faq' id="faq">
					<Faq />
				</div>
				{!breakpoints.isMobile && (
					<div className='section'>
						<LatesNews />
					</div>
				)}
				{!breakpoints.isMobile && (
					<div className='section'>
						<BannerSubscribe />
					</div>
				)}
			</div>
		</div>
	)
}

export default HomePage
