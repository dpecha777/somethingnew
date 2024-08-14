import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.EXPO_PUBLIC_EDGYTASKS_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-AUTH-KEY': process.env.EXPO_PUBLIC_EDGYTASKS_AUTH_API_KEY,
  },
});
