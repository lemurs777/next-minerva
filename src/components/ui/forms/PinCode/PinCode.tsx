'use client'
import { IPinCode } from '@/interfaces/forms'
import styles from './PinCode.module.scss'
import { useState } from 'react'
import clsx from 'clsx'

const PinCode = ({ label, counter, className }: IPinCode) => {
	const [otp, setOtp] = useState(new Array(counter).fill(''))
	// @ts-ignore
	const changeHandler = (e, index) => {
		if (isNaN(e.target.value)) return false
		setOtp([
			...otp.map((data, indx) => (indx === index ? e.target.value : data))
		])
		if (e.target.value && e.target.nextSibling) {
			e.target.nextSibling.focus()
		}
		if (e.target.nextSibling === null) {
			e.target.blur()
		}

	}
	return <div className={clsx(className, styles.pinCode)}>
		<label className={styles.pinCode__label}>
			{label}
		</label>
		<div className={styles.pinCode__items}>
			{otp.map((data, i) => (
				<input type="text" key={i} onChange={(e) => changeHandler(e, i)} />
			))}
		</div>
	</div>
}

export default PinCode