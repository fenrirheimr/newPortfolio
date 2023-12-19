import { defineStore } from "pinia";
import { shallowRef } from "vue";

import Scss from "@/partials/Scss.vue";
import Js from "@/partials/Js.vue";
import ClassicCv from "@/partials/ClassicCv.vue";
export const tabsStore = defineStore('products', {
  state: () => {
    return {
      tabs: [
        {
          name: 'Classic CV',
          isActive: true,
          component: shallowRef(ClassicCv),
          theme: 'light'
        },
        {
          name: 'SCSS',
          isActive: false,
          component: shallowRef(Scss),
          theme: 'dark'
        },
        {
          name: 'JS',
          isActive: false,
          component: shallowRef(Js),
          theme: 'dark'
        }
      ]
    }
  },
  actions: {
    openModal(payload) {
    },
    closeModal() {
    },
  },
  getters: {},
});
