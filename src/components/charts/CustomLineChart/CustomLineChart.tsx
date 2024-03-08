'use client'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
// import ReactApexChart from 'react-apexcharts'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
const CustomLineChart = () => {

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




	return <>
		<ReactApexChart
			options={options} series={series} type="line" height={170} width={'100%'} />
	</>
}

export default CustomLineChart