import clsx from 'clsx'
import styles from './TableTitle.module.scss'
import { ITableTitle } from '@/interfaces/titles'

const TableTitle = ({ title, className }: ITableTitle) => {
	return <h3 className={clsx(className, styles.title)}>{title}</h3>
}

export default TableTitle