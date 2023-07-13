import axios from 'axios'
import * as TS from './defind'


//用户登录
export const Login = (params:TS.RuleForm) => axios.post('/api/login', params).then(res => res.data)


//用户列表
export const getUserList = (params: TS.UserTableQuery) => axios({
    method:'get',
    url: '/api/users',
    params,
    headers: {
        "Authorization": localStorage.getItem('token')
    }
})
