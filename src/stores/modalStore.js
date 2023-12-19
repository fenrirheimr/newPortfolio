import { defineStore } from 'pinia'
export const modalStore = defineStore('modals', {
  state: () => {
    return {
      content: {}
    }
  }
})
