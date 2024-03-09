'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

import styles from './DouChart.module.scss'
import clsx from 'clsx'



type Props = {
	data: any
	option?: any
	className?: string
}
const DouChart = ({ data, option, className }: Props) => {
	// const data = {
	// 	labels: ['Withdrawn', 'Deposited',],
	// 	datasets: [
	// 		{
	// 			data: [40, 60], // Данные в % 
	// 			backgroundColor: [
	// 				'#A155B9',
	// 				'#165BAA',
	// 			],
	// 			borderWidth: 0,
	// 			rotation: 290 //Развернуть чарт на n градус
	// 		},
	// 	],
	// }
	const options = {
		plugins: {
			legend: {
				position: "left"
			}
		},
		maintainAspectRatio: false,
		// responsive: false,
	}
	return <div className={clsx(className, styles.chart)}>

		<Doughnut className='chart' data={data} options={option ? option : options} />
	</div>
}

export default DouChart