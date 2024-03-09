'use client'
import Frame from '@/components/Frame'
import styles from './Upliner.module.scss'
import { useContext, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import DouChart from '@/components/charts/DouChart'
import ButtonBorderGradient from '@/components/ui/buttons/ButtonBorderGradient'
import CustomColumnChart from '@/components/charts/CustomColumnChart'
import { CustomContext } from '@/utils/context/Context'

const Upliner = () => {
	const { setShowTransfer }: any = useContext(CustomContext)
	const data = {
		labels: ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5-10'],
		datasets: [
			{
				data: [40, 60, 70, 80, 10], // Данные в % 
				backgroundColor: [
					'#165BAA',
					'#A155B9',
					'#F765A3',
					'#16BFD6',
					'#16D629'
				],
				borderWidth: 0,
				rotation: 290 //Развернуть чарт на n градус
			},
		],
	}
	const option = {
		// responsive: false,

		plugins: {
			legend: {
				position: "right",
				labels: {
					// padding: 50
				}
			},

		},
		// responsive: false,
		maintainAspectRatio: false,
	}
	const tabBtns = ['detailed statistics', 'time chart']
	return <Frame className={styles.upliner}>
		<div className={styles.upliner__head}>
			<div className={styles.upliner__title}>
				Upliner:
				<span>Monitor</span>
			</div>
		</div>
		<div className={styles.upliner__counters}>
			<div className={styles.item}>
				<div className={styles.item__count}>0.00$</div>
				<div className={styles.item__text}>Total earned</div>
			</div>
			<div className={styles.item}>
				<div className={styles.item__count}>0.00$</div>
				<div className={styles.item__text}>Available</div>
			</div>
			<div className={styles.item}>
				<div className={styles.item__count}>0/0</div>
				<div className={styles.item__text}>Partners, Active/Total</div>
			</div>
		</div>

		<Tabs className={styles.tabs}>
			<TabList className={styles.tabs__navbar}>
				{tabBtns.map(btn => (
					<Tab key={btn} className={styles.tabs__btn} selectedClassName={styles.selected}>{btn}</Tab>
				))}
			</TabList>
			<div className={styles.tabs__body}>
				<TabPanel className={styles.tabs__panel}>

					<DouChart data={data} option={option} className={styles.douChart} />

				</TabPanel>
				<TabPanel className={styles.tabs__panel}>
					<CustomColumnChart />
				</TabPanel>
			</div>
		</Tabs>
		<div className={styles.upliner__btns}>
			<ButtonBorderGradient
				onClick={() => setShowTransfer(true)}
				className={styles.upliner__btn} name={'transfer to wallets'} />
			<ButtonBorderGradient className={styles.upliner__btn} name={'copy referral link'} />
		</div>
	</Frame>
}

export default Upliner