import axios from 'axios';

const api = axios.create({
    baseURL:'https://api.github.com/',
    client_id:'Iv1.4eda86b22ffa6104',
    client_secret: '25423dca5650a1fae4be4c283ac7a7915b437fb1',
})

export default api;