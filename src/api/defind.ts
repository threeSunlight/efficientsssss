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
/**登录中成功信息 */
interface LoginMeta {
	msg: string,
	status: number
}

/**登录总的信息返回中 */
interface allResInfo {
	data: LoginRes,
	meta: LoginMeta
}


// 用户列表ts校验
interface UserItem  {
	id: number,
	username: string,
	mobile: string,
	type: number,
	email: string,
	create_time: string,
	mg_state: boolean, // 当前用户的状态
	role_name: string
}

/**用户列表列表数据定义 */
type UserList = Array<UserItem>

/**列表查询数据 */
interface UserTableQuery {
	query?: string,
	pagenum: number,
	pagesize: number
}


/**用户新增表单ts校验 */
interface UserAdd {
	id:number,
	username: string,
	password?: string,
	mobile: string,
	email: string
}
export {
	UserAdd,
	UserTableQuery,
	RuleForm,
	allResInfo,
	UserList,
	UserItem
}
