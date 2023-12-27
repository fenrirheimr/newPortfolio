import axios from 'axios'

const endpoint = {
  baseURL: 'https://portfolio-6278.restdb.io/rest'
}

export const withAuthorization = (token, config = {}) => ({
  headers: {
    'x-apikey': token
  }
})

export const PORTFOLIO = axios.create(endpoint)
