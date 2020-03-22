/* 封装页面跳转 */
const router = {
	// 保留当前页面，跳转到应用内某页面
	push:function ({url}){
		uni.navigateTo({
			url:url,
			animationType:'slide-in-right'
		})
	},
	// 关闭当前页面，跳转到应用内某页面
	replace:function ({url}){
		uni.redirectTo({
			url:url
		})
	},
	// 关闭当前页面，返回上一页面或多级页面
	back:function (delta = 1){
		uni.navigateBack({
			// 需要返回的页面数
			delta:delta,
			animationType:'slide-in-left'
		})
	},
	// 关闭所有页面并调跳到某页面
	reLaunch:function({url}){
		uni.reLaunch({
			url:url
		})
	},
	// 跳转到其他tabbar页面，并且关闭所有非tabbar页面
	switchtab:function({url}){
		uni.showTabBar({
			url:url
		})
	}
}
export default router


