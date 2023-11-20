// import axios from 'axios';
// import { CONTENT_TYPE, SERVER_ID, SERVER_URL } from '../constant';
// import { getCookie } from '../util/util';

// const client = axios.create({
//   baseURL: SERVER_URL,
//   headers: {
//     'content-type': CONTENT_TYPE,
//     serverId: SERVER_ID,
//   },
// });

// client.interceptors.request.use(
//   (config) => {
//     const accessToken = getCookie('accessToken');
//     if (accessToken) {
//       config.headers['Authorization'] = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// export const postLogin = async (id: string, password: string) => {
//   const res = await client.post('login', {
//     id: id,
//     password: password,
//   });
//   return res;
// };
