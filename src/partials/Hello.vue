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
    title="Смотреть"
    class="button"
    size="large" @click="showModal = !showModal"
  />

  <ResumeModal :show="showModal" @close="showModal = false" />
</template>

<style scoped lang="scss">
h1 {
  @include font-style($font-size: calc(100vw * 10 / 100), $font-weight: 500, $line-height: 120%, $color: #352E2E);
  opacity: 0;
  position: relative;
  &.loaded {
    animation: text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  &:after {
    @include font-style($font-size: 20%, $font-weight: 500, $line-height: 120%, $color: #352E2E);
    @include absolute();
    content: 'Resume';
    right: 0;
    top: 100%;
    text-shadow: none;
  }
}

.button {
  opacity: 0;
  border: 1px solid currentColor;
  &.loaded {
    animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
}

//.btn-6 {
//
//
//  text-decoration: none;
//  line-height: $btn-height;
//  transition: 0.5s ease-in-out;
//  overflow: hidden;
//  width: 100%;
//  max-width: 20vw;
//  position: relative;
//  text-align: center;
//
//  opacity: 0;
//  border-radius: 3px;
//
//
//  & > * {
//    transition: 0.5s ease-in-out;
//  }
//
//  span {
//    @include absolute();
//    display: block;
//    @include size(0);
//    border-radius: 50%;
//    background-color: $btn-color-dark;
//    transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
//    transform: translate(-50%, -50%);
//    z-index: -1;
//  }
//
//  &:hover {
//    color: tint($btn-color, 55%);
//    cursor: pointer;
//    span {
//      @include size(225%, $btn-width*2.25);
//    }
//  }
//
//  &:active {
//    background-color: $btn-color;
//  }
//}

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
