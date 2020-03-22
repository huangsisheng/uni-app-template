/* 封装公共弹窗 */

export const textToast = function(text,icon = 'none'){
	if(text){
		uni.showToast({
			title:text,
			icon,
			duration:1500,
			position:'center'
		})
	}else{
		uni.hideToast()
	}
}

export const loadingToast = function(text){
	if(text){
		uni.showLoading({
			title:text,
			duration:1500,
			position:'center'
		})
	}else{
		uni.hideLoading()
	}
}

export const successToast = function(text){
	textToast(text,'success')
}