import { SVGProps } from 'react'
const OkIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none">
		<path
			fill="url(#a)"
			d="M9.057 17.94c2.187-3.057 4.45-5.77 6.131-7.68a89.813 89.813 0 0 1 2.818-3.075c.808-.835 1.608-1.6 2.378-2.32 1.312-1.228 2.846-2.589 3.81-3.171L22.964.06c-1.786 1.117-3.506 2.31-4.833 3.228-.774.534-1.491 1.048-2.168 1.537-.67.485-1.362 1.018-2.092 1.576-1.266.97-2.893 2.273-4.47 3.62L5.448 6.287.805 9.947l8.252 7.993Z"
		/>
		<defs>
			<linearGradient
				id="a"
				x1={0.805}
				x2={24.195}
				y1={9}
				y2={9}
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#4757E6" />
				<stop offset={0.765} stop-color="#8E54E9" />
			</linearGradient>
		</defs>
	</svg>

)


export default OkIcon
