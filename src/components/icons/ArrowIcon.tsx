import React, { SVGProps } from 'react'
const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={18}
		height={15}
		fill="none"
		{...props}
	>
		<path
			fill="currentColor"
			d="M17.207 8.207a1 1 0 0 0 0-1.414L10.843.429A1 1 0 1 0 9.43 1.843L15.086 7.5l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM.5 8.5h16v-2H.5v2Z"
		/>
	</svg>

)


export default ArrowIcon
