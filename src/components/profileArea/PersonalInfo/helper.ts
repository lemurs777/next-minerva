import * as Yup from 'yup'

const regx = {
	name: /^[а-яА-Яa-zA-Z]{2,20}$/
}
const name = Yup.string().matches(regx.name, 'Кириллица латиница , от 2 до 20 символов').required('Введите имя')
export const schemas = {
	custom: Yup.object().shape({
		name
	})
}
export const initialValue = {
	name: '',
	surname: '',
	language: '',
	secondEmail: '',
	facebook: '',
	country: '',
	city: '',
	linkedin: '',
	twitter: ''
}
