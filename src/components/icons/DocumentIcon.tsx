import React, { SVGProps } from 'react'
const DocumentIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="none"
		{...props}
	>
		<path
			stroke="#171717"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"
			opacity={0.4}
		/>
		<path
			stroke="#8E54E9"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M22 10h-4c-3 0-4-1-4-4V2l8 8Z"
		/>
	</svg>
)


export default DocumentIcon
