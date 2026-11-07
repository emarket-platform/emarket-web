import axios from 'axios';

import { env } from '@/app/config/env';

export const axiosInstance = axios.create({
    baseURL: env.apiBaseUrl,
    timeout: 10_000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});