// import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
// import { ElMessage } from "element-plus"
// // 数据返回的接口
// // 定义请求响应参数，不含data
// interface Result {
//   code: number
//   msg: string
// }

// // 请求响应参数，包含data
// interface ResultData<T = any> extends Result {
//   data?: T
// }
// const URL: string = ""
// // 封装请求状态码
// enum RequestEnums {
//   TIMEOUT = 3000,
//   SUCCESS = 200, // 请求成功
//   CREATE = 201, // 创建成功
//   DELETED = 204, // 删除成功
//   BADREQUEST = 400, // 请求的地址不存在或者包含不支持的参数
//   UNAUTHORIZED = 401, // 未授权
//   NOTFOUND = 404, // 请求的资源不存在
//   UNPROSE = 422, // 验证错误
//   ERROR = 500 // 内部错误
// }
// //配置axios的请求
// const config = {
//   // 默认地址
//   baseURL: URL as string,
//   // 设置超时时间
//   timeout: RequestEnums.TIMEOUT as number,
//   // 跨域时候允许携带凭证
//   withCredentials: true
// }

// class RequestHttp {
//   // 定义成员变量并指定类型
//   service: AxiosInstance
//   public constructor(config: AxiosRequestConfig) {
//     // 实例化axios
//     this.service = axios.create({
//       // 默认地址
//       baseURL: URL as string,
//       // 设置超时时间
//       timeout: RequestEnums.TIMEOUT as number,
//       // 跨域时候允许携带凭证
//       withCredentials: true
//     })
//     /**
//      * 请求拦截器
//      * 客户端发送请求 -> [请求拦截器] -> 服务器
//      * token校验(JWT) : 接受服务器返回的token,存储到vuex/pinia/本地储存当中
//      */

//     this.service.interceptors.request.use(
//       (config: any) => {
//         return {
//           ...config,
//           headers: {
// 						//封装token
//             //"x-access-token": token // 请求头中携带token信息
//           }
//         }
//       },
//       (error: AxiosError) => {
//         // 请求报错
//         Promise.reject(error)
//       }
//     )
//     /**
//      * 响应拦截器
//      * 服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
//      */

//     this.service.interceptors.response.use(
//       (response: AxiosResponse) => {
//         const { data, config } = response // 解构
//         if (data.code  === RequestEnums.UNAUTHORIZED) {
//           // 登录信息失效，应跳转到登录页面，并清空本地的token
//          // localStorage.setItem("token", "") // router.replace({ //   path: '/login' // })
//           return Promise.reject(data)
//         } // 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
//         return data
//       },
//       (error: AxiosError) => {
//         const { response } = error
// 				let title: string = ''
// 				let message: string = ''

// 				if (error && response) {
// 					message = response.data.message
// 					// 401, token失效
// 					if (error.response.data.status === 2) {
// 						router.push(
// 							{
// 								name: 'login'
// 							},
// 							() => {
// 								resetLoginInfo()
// 							}
// 						)
// 					}
// 					switch (
// 						error.response.status // 跨域存在获取不到状态码的情况
// 					) {
// 						case 400:
// 							title = '错误请求'
// 							break
// 						case 401:
// 							title = '资源未授权'
// 							break
// 						case 403:
// 							title = '禁止访问'
// 							break
// 						case 404:
// 							title = '未找到所请求的资源'
// 							break
// 						case 405:
// 							title = '不允许使用该方法'
// 							break
// 						case 408:
// 							title = '请求超时'
// 							break
// 						case 500:
// 							title = '内部服务器错误'
// 							break
// 						case 501:
// 							title = '未实现'
// 							break
// 						case 502:
// 							title = '网关错误'
// 							break
// 						case 503:
// 							title = '服务不可用'
// 							break
// 						case 504:
// 							title = '网关超时'
// 							break
// 						case 505:
// 							title = 'HTTP版本不受支持'
// 							break
// 						default:
// 							title = error.response.status
// 					}
// 					return MessageBox.alert(message, title, {
// 						type: 'warning'
// 					})
// 				} else {
// 					// 跨域获取不到状态码或者其他状态进行的处理
// 					return MessageBox.alert('请联系系统管理员, 或稍后再试!', '未知错误', {
// 						type: 'error'
// 					})
// 				}
//       }
//     )
//   }

//   // 常用方法封装
//   get<T>(url: string, params?: object): Promise<ResultData<T>> {
//     return this.service.get(url, { params })
//   }
//   post<T>(url: string, params?: object): Promise<ResultData<T>> {
//     return this.service.post(url, params)
//   }
//   put<T>(url: string, params?: object): Promise<ResultData<T>> {
//     return this.service.put(url, params)
//   }
//   delete<T>(url: string, params?: object): Promise<ResultData<T>> {
//     return this.service.delete(url, { params })
//   }
// }

// // 导出一个实例对象
// export default new RequestHttp(config)
