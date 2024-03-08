'use client'
import { useState } from 'react'
import styles from './Switch.module.scss'
import clsx from 'clsx'
type Props = {
	size?: 'small'
}
const Switch = ({ size }: Props) => {
	const [checked, setChecked] = useState(false)
	return (
		<label className={clsx(checked && styles.checked, styles.switch, size === 'small' ? styles.small : null)}>
			<div className={styles.switch__wrapper}>
				<input className={styles.switch__input}
					type='checkbox'
					checked={checked}
					onChange={() => setChecked(!checked)} />
				<span className={styles.switch__slider}></span>
			</div>
		</label>
	)
}

export default Switch
