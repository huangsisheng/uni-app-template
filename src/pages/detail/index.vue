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
				} catch (e) {
					//TODO handle the exception
				}
			},
		}
	}
</script>

<style>
</style>
