<script setup>
import { onMounted, ref } from 'vue'
import debounce from 'lodash/debounce'

import AnimatedButton from '@/components/AnimatedButton.vue'
import ResumeModal from '@/components/ResumeModal.vue'

defineProps({
  title: String,
})

const head = ref(null)
const showModal = ref(false)
const animatedButton = ref(null)

const isLoaded = debounce(() => {
  head.value.classList.add('loaded')
  animatedButton.value.animatedButton.classList.add('loaded')
}, 2000)

onMounted(() => {
  isLoaded()
})
</script>

<template>
  <h1 ref="head">
    {{ title }}
  </h1>

  <AnimatedButton
    ref="animatedButton"
    title="Резюме"
    class="button"
    size="large" @click="showModal = !showModal"
  />

  <ResumeModal :show="showModal" @close="showModal = false" />
</template>

<style scoped lang="scss">
h1 {
  @include font-style($font-size: calc(90vw * 10 / 100), $font-weight: 500, $line-height: 120%, $color: #352E2E);
  opacity: 0;
  position: relative;
  &.loaded {
    animation: text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  &:before,
  &:after {
    @include font-style($font-size: 20%, $font-weight: 500, $line-height: 120%, $color: #352E2E);
    @include absolute();
    text-shadow: none;
  }
  &:before {
    content: 'меня зовут';
    left: 12px;
    top: 0;
  }
  &:after {
    content: 'я - frontend developer';
    right: 12px;
    top: 100%;
  }
}

.button {
  opacity: 0;
  border: 1px solid currentColor;
  &.loaded {
    animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
}

@keyframes text-pop-up-top {
  0% {
    opacity: 0;
    transform: translateY(0);
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    opacity: 1;
    transform: translateY(-50px);
    transform-origin: 50% 50%;
    text-shadow:
        0 1px 0 #ccc,
        0 2px 0 #ccc,
        0 3px 0 #ccc,
        0 4px 0 #ccc,
        0 5px 0 #ccc,
        0 6px 0 #ccc,
        0 7px 0 #ccc,
        0 8px 0 #ccc,
        0 9px 0 #ccc,
        0 50px 30px rgba(0, 0, 0, 0.3);
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
