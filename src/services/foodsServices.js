import axios from './api'

const FoodsService = {
	async getFoods() {
		const response = await axios.get('/foods')
		return response.data
	},
}

export default FoodsService
