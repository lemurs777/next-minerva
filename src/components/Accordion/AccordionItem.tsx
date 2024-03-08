'use client'
import clsx from 'clsx'
import styles from './Accordion.module.scss'
import { ItemProps } from './types'
import { useState } from 'react'

const AccordionItem = ({ answer, id, question }: ItemProps) => {
	const [showList, setShowList] = useState(false)
	const [idItem, setIdItem] = useState<number | null>(null)
	return (
		<div className={clsx(showList && id === idItem ? styles.show : null, styles.item)}>
			<button
				className={styles.item__title}
				onClick={() => {
					setIdItem(id)
					setShowList(!showList)
				}}
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
