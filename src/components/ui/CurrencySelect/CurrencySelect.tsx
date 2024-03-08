import { ICurrencyItem, ICurrencySelect, ISelectCurrency } from '@/interfaces/forms'
import styles from './CurrencySelect.module.scss'
import Image from 'next/image'
import { useRef, useState } from 'react'
import clsx from 'clsx'
import useClickOutside from '@/hooks/useClickOutside'

const CurrencySelect = ({ placeholder, currencies }: ICurrencySelect) => {
	const menuRef = useRef(null)
	const [showMenu, setShowMenu] = useState(false)
	const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholder)
	const [selectCurrency, setSelectCurrency] = useState<ISelectCurrency>({
		icon: '',
		id: '',
		title: ''
	})
	const selectCurrencyHandler = (props: ICurrencyItem) => {
		const { id, icon, title } = props
		setSelectCurrency({
			id: id,
			icon: icon,
			title: title
		})
		setShowMenu(false)
	}
	useClickOutside(menuRef, () => setShowMenu(false))
	return <div className={styles.select} ref={menuRef}>
		<button type="button" className={styles.select__btn}
			onClick={() => setShowMenu(!showMenu)}
		>
			{selectCurrency.id === '' ? <div className={styles.select__placeholder}>{placeholder}</div> : (
				<div className={styles.currency}>
					<div className={styles.currency__icon}><Image src={selectCurrency.icon} alt={selectCurrency.title} />
					</div>
					<div className={styles.currency__name}>{selectCurrency.title}</div>
				</div>
			)}


		</button>
		<div className={clsx(showMenu && styles.show, styles.select__dropdown)}>
			<ul className={styles.select__list}>
				{currencies.map(currency => (
					<li className={styles.currency} key={currency.id}
						onClick={() => selectCurrencyHandler(currency)}
					>
						<div className={styles.currency__icon}><Image src={currency.icon} alt={currency.title} /></div>
						<div className={styles.currency__info}>
							<div className={styles.currency__name}>{currency.title}</div>
							<div className={styles.currency__sum}>{currency.sum}</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	</div>
}

export default CurrencySelect