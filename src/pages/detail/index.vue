<template>
	<view class="detail">
		<rich-text :nodes="detailCon.content"></rich-text>
	</view>
</template>

<script>
	import {
		getNews
	} from '@/api/testApi.js'
	export default{
		data(){
			return {
				detailCon:{}
			}
		},
		onLoad(options) {
			this.getNewsDetail(options.id)
		},
		methods:{
			async getNewsDetail(id) {
				try {
					const {
						data
					} = await getNews()
					this.detailCon = data.filter(item => item.id == id)[0]
					this.detailCon.content = this.detailCon.content || `<p style="text-align:center;margin-top:100px;">您访问的资源走丢了，请稍后再试。<p>`
				} catch (e) {
					//TODO handle the exception
				}
			},
		}
	}
</script>

<style>
</style>
