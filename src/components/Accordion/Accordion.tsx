'use client'
import clsx from 'clsx'
import styles from './Accordion.module.scss'
import AccordionItem from './AccordionItem'
import { AccordionProps } from './types'
import { useState } from 'react'

const Accordion = ({ list }: AccordionProps) => {
	const [idItem, setIdItem] = useState<number | null>(null)
	return (
		<div className={styles.accordion}>
			{list.map((item, index) => (
				// <AccordionItem
				// 	answer={item.answer}
				// 	question={item.question}
				// 	key={index}
				// 	id={item.id}
				// />
				<div key={index} className={clsx(item.id === idItem ? styles.show : null, styles.item)}>
					<button
						className={styles.item__title}
						onClick={() => {
							setIdItem(item.id)
						}}
					>
						{item.question}
					</button>
					<div className={styles.item__dropdown}>
						<div className={styles.item__body}>
							<p>{item.answer}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Accordion
