import { SVGProps } from 'react'
const BackIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={31}
		height={30}
		fill="none"
		{...props}
	>
		<g clipPath="url(#a)">
			<path
				fill="url(#b)"
				d="M.586 13.586a2 2 0 0 0 0 2.828l12.728 12.728a2 2 0 1 0 2.828-2.828L4.828 15 16.142 3.686A2 2 0 1 0 13.314.858L.586 13.586ZM31 13H2v4h29v-4Z"
			/>
		</g>
		<defs>
			<linearGradient
				id="b"
				x1={31}
				x2={2}
				y1={14.5}
				y2={14.5}
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#4757E6" />
				<stop offset={0.484} stop-color="#8E54E9" />
				<stop offset={1} stop-color="#FA0A9A" />
			</linearGradient>
			<clipPath id="a">
				<path fill="#fff" d="M0 0h31v30H0z" />
			</clipPath>
		</defs>
	</svg>

)


export default BackIcon
