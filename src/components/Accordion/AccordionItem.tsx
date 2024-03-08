'use client'
import clsx from 'clsx'
import styles from './Accordion.module.scss'
import { ItemProps } from './types'
import { useState } from 'react'

const AccordionItem = ({ answer, question }: ItemProps) => {
	const [showList, setShowList] = useState(false)
	return (
		<div className={clsx(showList ? styles.show : null, styles.item)}>
			<button
				className={styles.item__title}
				onClick={() => setShowList(!showList)}
			>
				{question}
			</button>
			<div className={styles.item__dropdown}>
				<div className={styles.item__body}>
					<p>{answer}</p>
				</div>
			</div>
		</div>
	)
}

export default AccordionItem
