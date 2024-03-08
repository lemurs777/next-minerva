export interface ICurrencyItem {
	icon: string
	title: string
	sum: string
	id: number | string
}
export interface ISelectCurrency {
	id: number | string
	title: string
	icon: string
}
export interface ICurrencySelect {
	placeholder: string
	currencies: ICurrencyItem[]
}
export interface IPinCode {
	label?: string
	counter: number
	className?: string
}
export interface IInputField {
	label?: string
	id?: string | undefined
	name: string
	className?: string
	placeholder?: string
	type?: 'email' | 'tel' | 'password' | 'text'
}
export interface ICheckbox {
	label?: any
	className?: string
}