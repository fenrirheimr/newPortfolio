import { defineStore } from 'pinia'
import data from '@/data/portfolio.json'
export default defineStore('skills', {
  state: () => {
    return {
      skills: {
        isLoaded: false,
        items: {}
      }
    }
  },
  mutation: {
    setSkills(state, data) {
      state.currentUser = data;
    },
  },
  getters: {
    getSkills: (state) => {
      return state.skills;
    },
  },
  actions: {
    async fetchSkills () {
      this.$patch({
        skills: {
          items: data,
          isLoaded: true,
        }
      })
    }
  }
})
