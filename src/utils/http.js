import {loadingToast,textToast} from './toast.js'
import router from '../router/index.js'
let Fly = require("flyio/dist/npm/wx")
let fly = new Fly

fly.config.timeout = 30000
fly.config.baseURL = ''
if(process.env.NODE_ENV === 'development'){
// #ifdef MP-WEIXIN
fly.config.baseURL = 'https://unidemo.dcloud.net.cn'
// #endif	
}



// 添加请求拦截器
fly.interceptors.request.use((request) => {
    // 在发送请求之前做些什么
    // if (token) {
    //     request.headers['token'] = token
    // }
	loadingToast('加载中...')
    return request
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
fly.interceptors.response.use((res) => {
    // 对响应数据做些事
    // if (!res.data) {
    // return Promise.reject(res)
    // }
	loadingToast()
	if(res.status === 200){
		return res
	}else if(res.status === 400 || res.status === 401 || res.status === 403){
		textToast('登录失效')
		router.replace({url:'/pages/login/index'})
	}else if(res.status === 500 || res.status === 502 || res.status === 503){
		textToast('暂无信息')
	}
}, (error) => {
    return Promise.reject(error)
})

export default fly