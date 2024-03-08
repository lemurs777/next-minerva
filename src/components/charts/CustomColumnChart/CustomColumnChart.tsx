'use client'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
// import ReactApexChart from 'react-apexcharts'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
const CustomColumnChart = () => {


	const series = [{
		name: 'Net Profit',
		data: [44, 55, 57, 56, 61, 58]
	}]
	const options: ApexOptions = {
		chart: {
			type: 'bar',
			toolbar: {
				show: false
			},
		},
		colors: ['#8E54E9'],
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '30%',
				borderRadius: 4,
				borderRadiusApplication: 'end'
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 1,
			colors: ['transparent']
		},
		xaxis: {
			categories: ['02.03', '03.03', '04.03', '05.03', '06.03', '07.03'],
		},
		fill: {
			opacity: 1
		},


	}

	return < ReactApexChart options={options} series={series}
		type="bar" height={160} width={'100%'} />

}

export default CustomColumnChart