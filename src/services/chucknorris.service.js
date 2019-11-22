import ChuckNorrisAPI from '@/api/chucknorris.api'

class ChuckNorrisService {
    async getFacts() {
        try {
            const response = await ChuckNorrisAPI.getFacts()
            if (response && response.data) {
                return response.data
            }
        } catch (error) {
            throw error
        }
    }
}
export default new ChuckNorrisService()