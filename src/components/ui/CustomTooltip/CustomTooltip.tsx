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
	place?: | 'top'
	| 'top-start'
	| 'top-end'
	| 'right'
	| 'right-start'
	| 'right-end'
	| 'bottom'
	| 'bottom-start'
	| 'bottom-end'
	| 'left'
	| 'left-start'
	| 'left-end'
	classNameTooltip?: string
}
const CustomTooltip = ({ className, content, id, icon = '?', classNameIcon, classNameTooltip, place = 'top' }: Props) => {
	return <>
		<div className={clsx(className, styles.tooltip)} data-tooltip-id={id}>
			<div className={clsx(styles.tooltip__icon, classNameIcon)} >
				{icon}</div>
		</div >
		<ReactTooltip
			id={id}
			place={place}
			content={content}
			className={classNameTooltip}
		>

		</ReactTooltip>
	</>
}

export default CustomTooltip