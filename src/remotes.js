import axios from 'axios'

const endpoint = {
  baseURL: 'https://portfolio-6278.restdb.io/rest',
}

export function withAuthorization(token, config = {}) {
  return {
    headers: {
      ...config,
      'x-apikey': token,
    },
  }
}

export const PORTFOLIO = axios.create(endpoint)
