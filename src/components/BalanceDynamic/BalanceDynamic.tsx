'use client'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Frame from '../Frame'
import TableTitle from '../TableTitle'
import CustomLineChart from '../charts/CustomLineChart'
import InfoIcon from '../icons/InfoIcon'
import CustomTooltip from '../ui/CustomTooltip'
import styles from './BalanceDynamic.module.scss'
import { ApexOptions } from 'apexcharts'
import clsx from 'clsx'
import { useState } from 'react'

const BalanceDynamic = () => {
	const [activeTab, setActiveTab] = useState(0)
	const series = [{
		name: "Desktops",
		data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
	}]
	const options: ApexOptions = {
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.7,
				opacityTo: 0.9,
				colorStops: [
					{
						offset: 0,
						color: "#4757E6",
						opacity: 1
					},
					{
						offset: 50,
						color: "#8E54E9",
						opacity: 1
					},
					{
						offset: 100,
						color: "#FA0A9A",
						opacity: 1
					}
				]
			}
		},
		chart: {
			toolbar: {
				show: false
			},
			// height: 170,
			type: 'line'
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'smooth'
		},
		grid: {
			show: true,
			row: {
				colors: undefined,
				opacity: 0.5
			},
			column: {
				colors: undefined,
				opacity: 0.5
			}
		},
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
		}
	}
	const series2 = [{
		name: "Desktops",
		data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	}]
	const options2: ApexOptions = {
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.7,
				opacityTo: 0.9,
				colorStops: [
					{
						offset: 0,
						color: "#4757E6",
						opacity: 1
					},
					{
						offset: 50,
						color: "#8E54E9",
						opacity: 1
					},
					{
						offset: 100,
						color: "#FA0A9A",
						opacity: 1
					}
				]
			}
		},
		chart: {
			toolbar: {
				show: false
			},
			// height: 170,
			type: 'line'
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'smooth'
		},
		grid: {
			show: true,
			row: {
				colors: undefined,
				opacity: 0.5
			},
			column: {
				colors: undefined,
				opacity: 0.5
			}
		},
		xaxis: {
			categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
		}
	}
	const series3 = [{
		name: "Desktops",
		data: [10, 41, 35, 51, 49, 62, 69]
	}]
	const options3: ApexOptions = {
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.7,
				opacityTo: 0.9,
				colorStops: [
					{
						offset: 0,
						color: "#4757E6",
						opacity: 1
					},
					{
						offset: 50,
						color: "#8E54E9",
						opacity: 1
					},
					{
						offset: 100,
						color: "#FA0A9A",
						opacity: 1
					}
				]
			}
		},
		chart: {
			toolbar: {
				show: false
			},
			// height: 170,
			type: 'line'
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'smooth'
		},
		grid: {
			show: true,
			row: {
				colors: undefined,
				opacity: 0.5
			},
			column: {
				colors: undefined,
				opacity: 0.5
			}
		},
		xaxis: {
			categories: ['Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday', 'Saturday ', 'Sunday '],
		}
	}
	const tabBtns = ['all', 'month', 'week']
	return <Frame className={styles.balance}
	>
		<div className={styles.balance__header}>
			<TableTitle className={styles.title} title='balance dynamics' />
			<div className={styles.tabs} >
				<ul className={styles.tabs__list} >
					{tabBtns.map((btn, index) => (

						<button onClick={() => setActiveTab(index)} key={index} className={clsx(activeTab === index && styles.active, styles.tabs__btn)}>{btn}</button>
					))}

				</ul>

			</div>
			<CustomTooltip id={'balance'} content={'balance dynamics'} icon={'i'} classNameIcon={styles.tooltipIcon} />
		</div>

		<div className={styles.tabPanel}>
			{activeTab === 0 && (<CustomLineChart options={options} series={series} />
			)}
			{activeTab === 1 && (<CustomLineChart options={options2} series={series2} />
			)}
			{activeTab === 2 && (<CustomLineChart options={options3} series={series3} />
			)}
		</div>
	</Frame>
}

export default BalanceDynamic