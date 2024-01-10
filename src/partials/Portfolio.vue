<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue'
import { debounce } from 'lodash'

// import portfolio from '@/data/portfolio.json'
import { portfolioStore } from '@/stores/portfolio'

import ArrowTop from '@/components/icons/ArrowTop.vue'
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
const scrollTopBtn = ref(null)

const isLoaded = debounce(() => {
  container.value.classList.add('loaded')
}, 0)

const temp = Object.values(filteredPortfolio.reduce((r, cur) => {
  const key = `k${cur.year}`; // символ "k" добавлен, чтобы автоматически не сортировало по цифровым ключам
  (r[key] = r[key] || []).push(cur)
  return r
}, {}))

const result = temp.map(item => ({
  year: item[0].year,
  items: item,
}))

function handleScroll() {
  const isContains = scrollTopBtn.value.classList.contains('is-visible')

  if (window.scrollY >= window.innerHeight - 300) {
    if (!isContains) {
      scrollTopBtn.value.classList.remove('is-hidden')
      scrollTopBtn.value.classList.add('is-visible')
    }
  }
  else {
    if (isContains) {
      scrollTopBtn.value.classList.add('is-hidden')
      scrollTopBtn.value.classList.remove('is-visible')
    }
  }
}

function handleScrollTop() {
  if (window.scrollY !== 0) {
    setTimeout(() => {
      window.scrollTo(0, window.scrollY - 30)
      handleScrollTop()
    }, 2)
  }
}

onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

onMounted(() => {
  isLoaded()
})
</script>

<template>
  <div class="container">
    <div ref="container" class="portfolio-wrapper">
      <GithubCalendar :data="result" />

      <Timeline :data="result" />

      <Teleport to="body">
        <div ref="scrollTopBtn" class="go-top-button" @click="handleScrollTop">
          <ArrowTop />
        </div>
      </Teleport>
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

.go-top-button {
  @include flex(row, center, center);
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 100px;
  right: 100px;
  opacity: 0;
  background: $btn-color-dark;
  border-radius: 5px;
  cursor: pointer;
  svg {
    width: 50%;
    color: #fff;
  }
  &.is-hidden {
    animation: fade-out-bottom 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  &.is-visible {
    animation: fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
}

@keyframes fade-in-bottom {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: .3;
  }
}

@keyframes fade-out-bottom {
  0% {
    transform: translateY(0);
    opacity: .3;
  }
  100% {
    transform: translateY(50px);
    opacity: 0;
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
