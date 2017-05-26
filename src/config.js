export default {
  API_URL: process.NODE_ENV === 'production'
    ? 'https://localhost:3030'
    : 'http://localhost:3030',
  PORT: 3030
}
