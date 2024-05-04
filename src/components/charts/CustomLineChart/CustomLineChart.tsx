'use client'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
// import ReactApexChart from 'react-apexcharts'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
const CustomLineChart = ({ options, series,height = 170,width = '100%',type= 'line' }: any) => {


	return <>
		<ReactApexChart
			options={options} series={series} type={type} height={height} width={width} />
	</>
}

export default CustomLineChart