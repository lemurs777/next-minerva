export interface ISelectOption {
	icon?: string | undefined
	title: string
	id: number | string
}
export interface ISelectOptionsList {
	options: ISelectOption[]
	label?: string
	classNameBtn?: string
	className?: string
	classNameWrap?: string

}