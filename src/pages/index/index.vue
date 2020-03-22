<template>
	<view class="content">
		<uni-list>
			<uni-list-item v-for="item in dataList" :key="item.id" :title="item.title" :note="item.summary" :thumb="item.author_avatar" @click="pageToDetail(item)">
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"

	import {
		getNews
	} from '@/api/testApi.js'
	export default {
		components: {
			uniList,
			uniListItem
		},
		data() {
			return {
				dataList: []
			}
		},
		onLoad() {
			this.getNews()
		},
		methods: {
			async getNews() {
				try {
					const {
						data
					} = await getNews()
					this.dataList = data
					this.$storage.set('newsList',this.dataList)
				} catch (e) {
					//TODO handle the exception
				}
			},
			pageToDetail(item){
				this.$pageTo.push({url:`../detail/index?id=${item.id}`})
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
