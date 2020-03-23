/* 封装本地存储 */

const storage = {
	get: function(key) {
		try{
			return JSON.parse(uni.getStorageSync(key)) || ''
		}catch(e){
			throw new Error(`获取storage:${key}信息失败`)
			//TODO handle the exception
		}
	},
	set: function(key,value) {
		try{
			const data = typeof value === 'object' && JSON.stringify(value)
			uni.setStorageSync(key,data)
		}catch(e){
			//TODO handle the exception
			throw new Error(`添加storage:${key}信息失败`)
		}
	},
	remove: function(key) {
		try{
			uni.removeStorageSync(key)
		}catch(e){
			//TODO handle the exception
			throw new Error(`移除storage:${key}信息失败`)
		}
	}
}

export default storage
