'use client'
import { ApexOptions } from 'apexcharts'
import dynamic from "next/dynamic"
import styles from './RadialChart.module.scss'
// import ReactApexChart from 'react-apexcharts'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
const RadialChart = () => {


	// const series = [50]
	// const options: ApexOptions = {
	// 	chart: {
	// 		// height: 350,
	// 		type: 'radialBar',
	// 		toolbar: {
	// 			show: false
	// 		}
	// 	},

	// 	plotOptions: {
	// 		radialBar: {
	// 			startAngle: -135,
	// 			endAngle: 225,
	// 			hollow: {
	// 				margin: 0,
	// 				size: '70%',
	// 				background: '#fff',
	// 				image: undefined,
	// 				imageOffsetX: 0,
	// 				imageOffsetY: 0,
	// 				position: 'front',
	// 				// dropShadow: {
	// 				// 	enabled: true,
	// 				// 	top: 3,
	// 				// 	left: 0,
	// 				// 	blur: 4,
	// 				// 	opacity: 0.24
	// 				// }
	// 			},
	// 			track: {
	// 				background: '#E9EBF3',
	// 				strokeWidth: '67%',
	// 				margin: 0, // margin is in pixels
	// 				// dropShadow: {
	// 				// 	enabled: true,
	// 				// 	top: -3,
	// 				// 	left: 0,
	// 				// 	blur: 4,
	// 				// 	opacity: 0.35
	// 				// }
	// 			},

	// 			dataLabels: {
	// 				show: true,
	// 				name: {
	// 					offsetY: 20,
	// 					show: true,
	// 					color: '#243465',
	// 					fontWeight: 300,
	// 					fontSize: '12px'
	// 				},
	// 				value: {
	// 					// @ts-ignore
	// 					formatter: function (val) {
	// 						// @ts-ignore
	// 						return parseInt(val)
	// 					},
	// 					color: '#111',
	// 					fontSize: '36px',
	// 					show: true,
	// 				}
	// 			}
	// 		}
	// 	},
	// 	fill: {
	// 		type: 'gradient',
	// 		gradient: {
	// 			shade: 'dark',
	// 			type: 'horizontal',
	// 			shadeIntensity: 0.5,
	// 			colorStops: [
	// 				{
	// 					offset: 0,
	// 					color: "#4757E6",
	// 					opacity: 1
	// 				},
	// 				{
	// 					offset: 50,
	// 					color: "#8E54E9",
	// 					opacity: 1
	// 				},
	// 				{
	// 					offset: 100,
	// 					color: "#FA0A9A",
	// 					opacity: 1
	// 				}
	// 			],

	// 			inverseColors: true,
	// 			opacityFrom: 1,
	// 			opacityTo: 1,
	// 			stops: [0, 100]
	// 		}
	// 	},
	// 	stroke: {
	// 		lineCap: 'round',
	// 	},
	// 	labels: ['DAYS IN WORK'],
	// }
	const series = [45]
	const options: ApexOptions = {
		chart: {
			// height: 350,
			// width: 170,
			// type: 'radialBar',
		},
		plotOptions: {

			radialBar: {
				offsetX: 50,
				hollow: {
					size: '70%',
				},

				dataLabels: {
					name: {
						fontSize: '12px',
						fontWeight: 300,
						color: '#243465',
						offsetY: 15
					},
					value: {

						offsetY: -15,
						fontSize: '18px',
						formatter: function (val) {
							return 7 + '/' + 15
						}
					}
				},
			},
		},

		fill: {

			type: 'gradient',
			gradient: {

				colorStops: [
					{
						offset: 0,
						color: "#FA0A9A",
						opacity: 1
					},
					{
						offset: 50,
						color: "#8E54E9",
						opacity: 1
					},
					{
						offset: 100,
						color: "#4757E6",
						opacity: 1
					},

				],
			}
		},
		stroke: {
			lineCap: 'round',

		},

		labels: ['DAYS IN WORK'],
		xaxis: {

			position: 'center'
		}
	}


	return <div className={styles.chart}>
		<ReactApexChart options={options} series={series} type="radialBar" height={200} width={'100%'} />
	</div>
}

export default RadialChart