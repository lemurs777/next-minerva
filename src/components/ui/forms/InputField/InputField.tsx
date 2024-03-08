import { IInputField } from '@/interfaces/forms'
import styles from './InputField.module.scss'
import { ErrorMessage as Error, Field } from 'formik'
import clsx from 'clsx'

const InputField = ({ id, label, placeholder, className, name, type = 'text' }: IInputField) => {
	return <div className={clsx(className, styles.field)}>
		{label && (
			<label htmlFor={id} className={styles.field__label}>
				{label}
			</label>
		)}
		<Field name={name} id={id} placeholder={placeholder} />
		<Error name={name}>{(error) => <span>{error}</span>}</Error>
	</div>
}

export default InputField