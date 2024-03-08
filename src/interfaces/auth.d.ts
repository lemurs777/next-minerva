export interface IRecoveryPassword {
	email: string
	newPassword: string
	repeatPassword: string
}

export interface ILogin {
	username: string
	password: string
}

export interface IRegistration extends ILogin {
	email: string
	repeatPassword: string
}