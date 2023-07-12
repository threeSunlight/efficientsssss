/**校验登录表单 */
interface RuleForm {
	username: string
	password: string
}

/**登录接口的返回值校验 */
interface LoginRes {
	id: number,
	rid: number,
	username: string,
	mobile: string,
	email: string,
	token: string,
	// [props: string]: any,
}

export {
	RuleForm,
	LoginRes
}
