import { defineStore } from 'pinia'

import { PORTFOLIO, withAuthorization } from '@/remotes'

export const portfolioStore = defineStore('portfolio', {
  state: () => {
    return {
      items: [],
    }
  },
  mutation: {
  },
  getters: {
    getPortfolio(state) {
      return state.items
    },
  },
  actions: {
    async fetchPortfolio() {
      const token = '6584762f9b604b6d4ab1ea77'
      const { data } = await PORTFOLIO.get('/portfolio', withAuthorization(token))
      this.items = [...data]
    },
  },
})
