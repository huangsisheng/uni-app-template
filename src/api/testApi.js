import fly from '../utils/http.js'

export const getNews = () => {
	return fly.get('/api/news')
}