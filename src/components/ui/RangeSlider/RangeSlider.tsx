'use client'
import { useState } from 'react'
import styles from './RangeSlider.module.scss'



const RangeSlider = () => {
	const [value, setValue] = useState(70)
	const MAX = 100
	const getBackgroundSize = () => {
		return { backgroundSize: `${(value * 100) / MAX}% 100%` }
	}
	return (
		<div className={styles.slider}>
			<input type="range"
				min="0"

				// @ts-ignore
				onChange={(e) => setValue(e.target.value)}
				style={getBackgroundSize()} value={value}
			/>
		</div>
	)
}

export default RangeSlider
