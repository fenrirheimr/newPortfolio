<script setup>
import { onMounted, ref } from 'vue'
import { debounce } from 'lodash'

// import portfolio from '@/data/portfolio.json'
import { portfolioStore } from '@/stores/portfolio'

import GithubCalendar from '@/partials/GithubCalendar.vue'
import Timeline from '@/partials/Timeline.vue'

defineProps({
  title: String,
})

const store = portfolioStore()

await store.fetchPortfolio()
const portfolio = store.getPortfolio

// const filteredPortfolio = portfolio.filter(item => item.isRedone !== true)
const filteredPortfolio = portfolio

const container = ref(null)

const isLoaded = debounce(() => {
  container.value.classList.add('loaded')
}, 1000)

const temp = Object.values(filteredPortfolio.reduce((r, cur) => {
  const key = `k${cur.year}`; // символ "k" добавлен, чтобы автоматически не сортировало по цифровым ключам
  (r[key] = r[key] || []).push(cur)
  return r
}, {}))

const result = temp.map(item => ({
  year: item[0].year,
  items: item,
}))

onMounted(() => {
  isLoaded()
})
</script>

<template>
  <div class="container">
    <div ref="container" class="portfolio-wrapper">
      <GithubCalendar :data="result" />

      <Timeline :data="result" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  @include flex(row, flex-start, flex-start);
  padding-top: 100px;
  .portfolio-wrapper {
    @include flex(column, flex-start, center);
    opacity: 0;
    &.loaded {
      animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
  }
}

@keyframes slide-in-bottom {
  0% {
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
