'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { currency } from '../../../public/db/currency-table'
import decorImg from '../../images/congratulation.png'
import RangeSlider from '../ui/RangeSlider'
import Select from '../ui/Select'
import Switch from '../ui/Switch'
import ButtonBorderGradient from '../ui/buttons/ButtonBorderGradient'
import ButtonGradient from '../ui/buttons/ButtonGradient'
import styles from './InvestmentBlock.module.scss'
const InvestmentBlock = () => {
	const [nextStep, setNextStep] = useState(false)
	const [active, setActive] = useState(0)
	const offerBtns = ['starter', 'basic', 'growth', 'strategic', 'pro', 'advanced', 'elite', 'maximal']

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [nextStep])


	return <div className={styles.block}>
		{!nextStep ? (
			<div className={styles.new}>
				<div className={styles.new__header}>
					<div className={styles.new__title}>new investment</div>
				</div>
				<div className={styles.new__body}>
					<div className={styles.new__col}>
						<div className={styles.calc}>
							<div className={styles.line}>
								<div className={styles.select}>
									<Select options={currency} label='currency' />
								</div>
								<div className={styles.switcher}>
									<div className={styles.label}>compounding</div>
									<Switch />
								</div>
							</div>
							<div className={styles.range}>
								<div className={styles.label}>Amount</div>
								<div className={styles.range__slider}>
									<RangeSlider />
								</div>
								<div className={styles.range__inputs}>
									<div className={styles.range__input}>
										<input type="number" placeholder='usd' />
										<button className={styles.range__btn} type='button'>max</button>
									</div>
									<div className={styles.range__input}>
										<input type="number" placeholder='btc' />
									</div>
								</div>
							</div>
							<div className={styles.offer}>
								<div className={styles.label}>investment offer</div>
								<div className={styles.offer__btns}>
									{offerBtns.map((btn, index) => (
										<button
											className={clsx(active === index && styles.active, styles.offerBtn)}
											onClick={() => setActive(index)}
											type='button'
											key={index}
										>{btn}</button>
									))}
								</div>
							</div>
							<div className={clsx(styles.lineCenter, styles.line)}>
								<div className={styles.label}>investment Period</div>
								<div className={styles.days}><span>15</span> days</div>
							</div>
						</div>
					</div>
					<div className={styles.new__col}>
						<div className={styles.frame}>
							<div className={styles.frame__head}>
								<div className={styles.frame__title}>Summary</div>
							</div>
							<div className={styles.frame__body}>
								<ul className={styles.frame__items}>
									<li className={styles.frameItem}>
										<div className={styles.frameItem__title}>daily:</div>
										<div className={styles.frameItem__info}><span>+1%</span> / $10 / 0.001 BTC~</div>
									</li>
									<li className={styles.frameItem}>
										<div className={styles.frameItem__title}>Weekly:</div>
										<div className={styles.frameItem__info}><span>+7%</span> / $100 / 0.01 BTC~</div>
									</li>
									<li className={styles.frameItem}>
										<div className={styles.frameItem__title}>Total:</div>
										<div className={styles.frameItem__info}> <span>+30%</span> / $1000 / 0.1 BTC~</div>
									</li>
								</ul>
							</div>
							<div className={styles.frame__bottom}>
								<div className={clsx('gradient-text', styles.frame__roi)}>ROI: +30%</div>
								<div className={styles.frame__text}>principal returned</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.new__bottom}>
					<ButtonGradient onClick={() => setNextStep(true)} size='large'
						className={styles.lgBtn}
						name={'activate'} />
				</div>
			</div>
		) : (
			<div className={styles.confirm}>
				<div className={styles.confirm__title}>Congratulations, the new investment&nbsp;
					<span>has been successfully activated</span>
				</div>
				<ButtonBorderGradient name={'to dashboard'} link='/dashboard' />
				<div className={styles.confirm__img}>
					<Image src={decorImg} alt={'decor'} />
				</div>
			</div>
		)}
	</div>
}

export default InvestmentBlock