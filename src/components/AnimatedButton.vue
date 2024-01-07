<script setup>
import { ref } from 'vue'
import { oneOf } from 'vue-types'
import mouseMove from '@/utils/btnAnimations.js'

const props = defineProps({
  title: String,
  size: oneOf(['small', 'medium', 'large']).def('medium'),
})
const animatedButton = ref(null)

defineExpose({ animatedButton })
</script>

<template>
  <div
    ref="animatedButton" class="anim-button" :class="{
      'size-small': size === 'small',
      'size-medium': size === 'medium',
      'size-large': size === 'large',
    }" @mouseenter="mouseMove" @mouseleave="mouseMove"
  >
    {{ props.title }}
    <span />
  </div>
</template>

<style scoped lang="scss">
.anim-button {
  text-decoration: none;
  transition: 0.5s ease-in-out;
  overflow: hidden;
  position: relative;
  text-align: center;
  border-radius: 3px;
  z-index: 0;
  &.size-small {}
  &.size-medium {
    @include font-style($font-size: 1.3vw, $font-weight: 500, $color: $btn-color);
    padding: 15px 35px;
  }
  &.size-large {
    @include font-style($font-size: 2vw, $font-weight: 500, $line-height: 120%, $color: $btn-color);
    padding: 20px 40px;
  }

  & > * {
    transition: 0.5s ease-in-out;
  }

  span {
    @include absolute();
    @include size(0);

    display: block;
    border-radius: 50%;
    background-color: $btn-color-dark;
    transition: width 0.4s ease-in-out, height 0.4s ease-in-out;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  &:hover {
    color: tint($btn-color, 85%);
    cursor: pointer;
    span {
      @include size(225%, $btn-width*2.25);
    }
  }

  &:active {
    background-color: $btn-color;
  }
}
</style>
