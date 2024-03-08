import { SVGProps } from 'react'
const LoginIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width={56}
		height={56}
		fill="none"
	>
		<path
			fill="url(#a)"
			d="M22.367 25.667 18.1 21.399a2.333 2.333 0 1 1 3.299-3.3l9.9 9.901-9.9 9.9a2.333 2.333 0 1 1-3.3-3.299l4.268-4.268H9.333a2.333 2.333 0 1 1 0-4.666h13.034Zm3.3-16.334A2.333 2.333 0 0 1 28 7h16.333A4.68 4.68 0 0 1 49 11.667v32.666A4.68 4.68 0 0 1 44.333 49H28a2.333 2.333 0 1 1 0-4.667h16.333V11.667H28a2.333 2.333 0 0 1-2.333-2.334Z"
		/>
		<defs>
			<linearGradient
				id="a"
				x1={7}
				x2={49}
				y1={28}
				y2={28}
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#4757E6" />
				<stop offset={0.765} stop-color="#8E54E9" />
			</linearGradient>
		</defs>
	</svg>

)


export default LoginIcon
