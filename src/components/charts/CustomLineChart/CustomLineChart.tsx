'use client'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
// import ReactApexChart from 'react-apexcharts'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
const CustomLineChart = ({ options, series }: any) => {






	return <>
		<ReactApexChart
			options={options} series={series} type="line" height={170} width={'100%'} />
	</>
}

export default CustomLineChart