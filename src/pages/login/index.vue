<template>
	<view class="login">
		<input type="text" value="" placeholder="用户名" />
		<input type="password" value="" placeholder="密码" />
		<button type="default" @click="toHome">登录</button>
		<view class="login-address">{{address}}</view>
		<live-player
		  :id="livePlayerId"
		  src="https://domain/pull_stream"
		  autoplay
		  @statechange="statechange"
		  @error="error"
		  style="width: 300px; height: 225px;"
		/>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		data(){
			return{
				address:'',
				livePlayerId:'first'
			}
		},
		onLoad() {
			let _this = this
			/* uni.getLocation({
			    type: 'wgs84',
				geocode:true,
			    success: function (res) {
					let address = res.address
					console.log(res)
					_this.address = address.province + address.city + address.district + address.street
			        console.log('当前位置的经度：' + res.longitude);
			        console.log('当前位置的纬度：' + res.latitude);
			    }
			}); */
			uni.chooseLocation({
			    success: function (res) {
			        console.log('位置名称：' + res.name);
			        console.log('详细地址：' + res.address);
			        console.log('纬度：' + res.latitude);
			        console.log('经度：' + res.longitude);
			    }
				
			});
			console.log(this.stateA)
			uni.createLivePlayerContext(livePlayerId, this)
		},
		computed:{
			...mapState({
				stateA:state => state.a
			})
		},
		methods:{
			toHome(){
				this.$pageTo.switchtab({
					url:'../index/index'
				})
			},
			statechange(e){
				console.log('live-player code:', e.detail.code)
			},
			error(e){
				console.error('live-player error:', e.detail.errMsg)
			}
		}
	}
</script>

<style>
</style>
