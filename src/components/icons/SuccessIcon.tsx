import React, { SVGProps } from 'react'
const SuccessIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={23}
		height={23}
		fill="none"
		{...props}
	>
		<path
			fill="currentColor"
			d="M20.818 3.315a.903.903 0 0 0-1.276 0L8.923 13.931 3.454 8.425a.9.9 0 0 0-1.275 0L.263 10.34a.906.906 0 0 0 0 1.277l8.017 8.07c.35.348.922.348 1.276 0l13.177-13.18a.903.903 0 0 0 0-1.28l-1.915-1.912Z"
		/>
	</svg>

)


export default SuccessIcon
