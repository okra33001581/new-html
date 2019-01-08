import axios from 'axios';

let base = '/api';

export const requestLogin = params => { return axios.post(`${base}/adminLogin`, params).then(res => res.data); };

// export const getMenu = params => { return axios.post(`${base}/getMenu`, params).then(res => res.data); };

export const getMenu = params => { return axios.get(`http://apidemo.test/api/event/getJson`).then(res => res.data); };

// export const requestLogin = params => { return axios.post(`${base}/adminLogin`, params).then(res => res.data); };

