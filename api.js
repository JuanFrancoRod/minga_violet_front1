let apiUrl = 'http://localhost:8000/'
if (process.env.NODE_ENV === 'production') {
    apiUrl = process.env.NODE_ENV
}
export default apiUrl