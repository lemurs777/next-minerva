'use client'
import Frame from '@/components/Frame'

import Tooltip from '@/components/ui/CustomTooltip'
import Switch from '@/components/ui/Switch'
import walletIcon from '@/images/wallets/btc.svg'
import Image from 'next/image'
import styles from './Basic.module.scss'
import RadialChart from '@/components/charts/RadialChart'
import { useState } from 'react'
import ButtonBorderGradient from '@/components/ui/buttons/ButtonBorderGradient'
import clsx from 'clsx'
import TransactionTable from '@/components/TransactionTable'
import TransactionTableSpot from '@/components/TransactionTable/TransactionTableSpot'
const Basic = () => {
	const [newCount, setNewCount] = useState(false)
	const [showTable, setShowTable] = useState(false)
	const [tabBtns, setTabBtns] = useState(0)
	const tabsNav = ['arbitrage', 'spot', 'futures']
	return (<>

		<div className={clsx(showTable ? styles.show : null, styles.block)}>
			<Frame className={clsx(styles.front, styles.basic)}>
				<div className={styles.basic__head}>
					<div className={styles.headItem}>
						<div className={styles.headItem__icon}><Image src={walletIcon} alt='wallet' />
						</div>
						<div className={styles.headItem__info}>
							<div className={styles.headItem__item}>2163.52 USDT</div>
							<div className={styles.headItem__item}>2163.55 $</div>
						</div>
					</div>
					<div className={styles.basic__label}>basic</div>
				</div>
				<div className={styles.basic__line}>
					<div className={styles.total}>
						<div className={styles.total__title}>Total earned:</div>
						<div className={styles.total__info}>
							<span className={styles.accent}>+10% /</span><span onMouseEnter={() => setNewCount(true)}
								onMouseLeave={() => setNewCount(false)}
							>
								{!newCount ? '+153 $' : '0.002159BTC'} </span>
						</div>
					</div>
					<div className={styles.total}>
						<div className={styles.total__title}>Last day profit:</div>
						<div className={styles.total__info}>
							<span>+1% /</span> +15.3 $
						</div>
					</div>
				</div>
				<div className={styles.basic__line}>
					<div className={styles.basic__switcher}>
						<div className={styles.switch}>
							<div className={styles.switch__wrap}>
								<div className={styles.switch__title}>Reinvestment </div>
								<Tooltip id={'reinv'} content={'lorem'} className={styles.switch__tooltip} />
							</div>
							<Switch size='small' />
						</div>
						<div className={styles.switch}>
							<div className={styles.switch__title}>compounding:</div>
							<Switch size='small' />
						</div>
					</div>
					<RadialChart />
				</div>
				<div className={clsx(styles.basic__lineSm,styles.basic__line)}>
					<div className={styles.total}>
						<div className={styles.total__title}>Completed transactions today</div>
						<div className={styles.total__info}>
							<span className={styles.accent}>5</span>/24
						</div>
					</div>
					<div className={styles.total}>
						<div className={styles.total__title}>current day profit:</div>
						<div className={styles.total__info}>
							<span className={styles.accent}>+1.03% /</span> +15.3 $
						</div>
					</div>
				</div>
				<div className={styles.basic__line}>
					<div className={styles.item}>Next accrual: 23:59:56</div>
					<ButtonBorderGradient name={'Transactions for today'} type='button' className={styles.btn} size='small' darkText={true} onClick={() => setShowTable(true)} />
					<div className={styles.item}>Investment ends: 02.04.24</div>
				</div>
			</Frame>
			<Frame className={clsx(styles.back, styles.basic)}>
				<div className={styles.table}>
					<div className={styles.table__head}>
						<button type="button" className={styles.goBack} onClick={() => setShowTable(false)}><svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_908_4205)">
								<path d="M0.585787 14.0858C-0.195263 14.8668 -0.195263 16.1332 0.585787 16.9142L13.3137 29.6421C14.0948 30.4232 15.3611 30.4232 16.1421 29.6421C16.9232 28.8611 16.9232 27.5948 16.1421 26.8137L4.82843 15.5L16.1421 4.18629C16.9232 3.40524 16.9232 2.13891 16.1421 1.35786C15.3611 0.576814 14.0948 0.576814 13.3137 1.35786L0.585787 14.0858ZM31 13.5L2 13.5L2 17.5L31 17.5L31 13.5Z" fill="url(#paint0_linear_908_4205)" />
							</g>
							<defs>
								<linearGradient id="paint0_linear_908_4205" x1="31" y1="15" x2="2" y2="15" gradientUnits="userSpaceOnUse">
									<stop stopColor="#4757E6" />
									<stop offset="0.484375" stopColor="#8E54E9" />
									<stop offset="1" stopColor="#FA0A9A" />
								</linearGradient>
								<clipPath id="clip0_908_4205">
									<rect width="31" height="30" fill="white" transform="translate(0 0.5)" />
								</clipPath>
							</defs>
						</svg>
						</button>
						<div className={styles.tabs__btns}>
							{tabsNav.map((btn, index) => (
								<button key={index} className={clsx(
									tabBtns === index ? styles.active : null,
									styles.tabs__btn)}
									onClick={() => setTabBtns(index)}
								>{btn}</button>
							))}
						</div>
					</div>
					<div className={styles.tabs}>
						<div className={styles.tabs__body}>
							{tabBtns === 0 && (
								<div className={styles.tabs__content}>
									<TransactionTable className={styles.tabTable} />
								</div>
							)}
							{tabBtns === 1 && (
								<div className={styles.tabs__content}>
									<TransactionTableSpot className={styles.tabTable} />
								</div>
							)}
							{tabBtns === 2 && (
								<div className={styles.tabs__content}>
									<TransactionTableSpot className={styles.tabTable} />
								</div>
							)}
						</div>
					</div>


				</div>
			</Frame >

		</div>
	</>)
}

export default Basic