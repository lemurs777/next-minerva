'use client'
import { Tooltip as ReactTooltip } from "react-tooltip"
import { clsx } from 'clsx'
import styles from './CustomTooltip.module.scss'
type Props = {
	className?: string
	icon?: any
	id: any
	classNameIcon?: string
	content: string
}
const CustomTooltip = ({ className, content, id, icon = '?', classNameIcon }: Props) => {
	return <>
		<div className={clsx(className, styles.tooltip)} data-tooltip-id={id}>
			<div className={clsx(styles.tooltip__icon, classNameIcon)} >
				{icon}</div>
		</div >
		<ReactTooltip
			id={id}
			place="top"
			content={content}
		>

		</ReactTooltip>
	</>
}

export default CustomTooltip