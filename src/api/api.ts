import axios from 'axios'
import * as TS from './defind'

export const Login = (params:TS.RuleForm) => axios.post('/api/login', params).then(res => res)

