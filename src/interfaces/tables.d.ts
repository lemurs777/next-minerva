import { ReactNode } from 'react'

interface ITableBody {
	date: string
	type: any
	sum: string
	id: number
	icon: string
	status: string
	hash: ReactNode
}
export interface ICurrencyTable {
	body?: ITableBody[]
}