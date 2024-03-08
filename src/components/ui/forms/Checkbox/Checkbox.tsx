import { ICheckbox } from '@/interfaces/forms'
import styles from './Checkbox.module.scss'
import { useState } from 'react'
import clsx from 'clsx'

const Checkbox = ({ label, className }: ICheckbox) => {
	const [isChecked, setIsChecked] = useState(false)
	return <div className={clsx(className, styles.checkbox)}>
		<label className={clsx(isChecked && styles.checked, styles.checkbox__label)}>
			<span>{label}</span>
			<input onChange={() => setIsChecked((prev) => !prev)} type="checkbox" />
		</label>
	</div>
}

export default Checkbox