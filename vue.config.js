const path = require('path')
// 小程序下不支持开发环境
module.exports = {
	devServer:{
		proxy:{
			'/api':{
				target:'https://unidemo.dcloud.net.cn'
			}
		}
	}
}