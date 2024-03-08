import React, { SVGProps } from 'react'
const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={25}
		height={24}
		fill="none"
		{...props}
	>
		<rect width={4} height={10.667} x={10.016} y={9.333} fill="currentColor" rx={2} />
		<rect width={4} height={4} x={10.016} y={4} fill="currentColor" rx={2} />
	</svg>

)


export default InfoIcon
