import { Cookies } from '@constants/cookies';
import axios from 'axios';
import { getCookie } from 'cookies-next';

const httpClient = axios.create({ baseURL: 'http://localhost:8080/' });

httpClient.interceptors.request.use(function (config: any) {
  const token = getCookie(Cookies.THREE_DOTS_AUTH_TOKEN);

  config.headers.Authorization = token ? `Bearer ${getCookie(Cookies.THREE_DOTS_AUTH_TOKEN)}` : '';

  return config;
});

export { httpClient };
