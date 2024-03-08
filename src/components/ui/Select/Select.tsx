'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Select.module.scss'
import { ISelectOption, ISelectOptionsList } from '@/interfaces/selects'
import Image from 'next/image'
import useClickOutside from '@/hooks/useClickOutside'
import clsx from 'clsx'

const Select = ({ options, label, classNameBtn, classNameWrap, className }: ISelectOptionsList) => {
	const [show, setShow] = useState(false)
	const selectRef = useRef(null)
	const [select, setSelect] = useState<ISelectOption>({
		icon: options[0].icon,
		title: options[0].title,
		id: options[0].id
	})

	const selectHandler = (element: ISelectOption) => {

		setSelect({
			icon: element.icon,
			title: element.title,
			id: element.id
		})
		setShow(false)
	}
	useClickOutside(selectRef, () => setShow(false))
	return <div className={clsx(classNameWrap, styles.wrapper)}>
		<label className={styles.label}>{label}</label>
		<div className={clsx(className, styles.select)} ref={selectRef}>
			<button type="button" className={clsx(classNameBtn, styles.select__button)}
				onClick={() => setShow(!show)}
			>
				<span>{select.title}</span>
				{select.icon && (<div className={styles.select__buttonIcon}><Image src={select.icon} alt={select.title} /></div>)}
			</button>
			<div className={clsx(show && styles.open, styles.select__menu)}>
				<ul className={styles.select__options}>
					{options.map(element => (
						<li className={clsx(select.id === element.id && styles.selected, styles.option)} key={element.id}
							onClick={() => selectHandler(element)}

						>
							<div className={styles.option__title}>{element.title}</div>
							{element.icon &&
								<div className={styles.option__icon}><Image src={element.icon} alt={element.title} /></div>
							}
						</li>
					))}
				</ul>
			</div>
		</div>
	</div>
}

export default Select