import styles from './Accordion.module.scss'
import AccordionItem from './AccordionItem'
import { AccordionProps } from './types'

const Accordion = ({ list }: AccordionProps) => {
	return (
		<div className={styles.accordion}>
			{list.map((item, index) => (
				<AccordionItem
					answer={item.answer}
					question={item.question}
					key={index}
				/>
			))}
		</div>
	)
}

export default Accordion
