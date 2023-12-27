import { defineStore } from 'pinia'
import data from '@/data/portfolio.json'
import axios from 'axios'

import {PORTFOLIO, withAuthorization} from '@/remotes'
export const portfolioStore = defineStore('portfolio', {
  state: () => {
    return {
      items: []
    }
  },
  mutation: {
  },
  getters: {
    getPortfolio(state){
      return state.items
    }
  },
  actions: {
    async fetchPortfolio() {
      const token = '6584762f9b604b6d4ab1ea77'
      const { data } = await PORTFOLIO.get('/portfolio?sort=_id', withAuthorization(token, {}))
      this.items = [...data]
    },
  }
})
