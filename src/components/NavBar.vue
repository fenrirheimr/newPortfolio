<script setup>
import { RouterLink, useRouter } from 'vue-router'
import mouseMove from "@/utils/btnAnimations.js";

const router = useRouter()

const props = defineProps({
  title: String,
  path: String
})

const handleNav = () => {
  router.push({
    path: props.path
  })
}

</script>

<template>
  <nav ref="nav">
    <div class="btn-6" @mouseenter="mouseMove" @mouseleave="mouseMove" @click="handleNav">
      {{ props.title }}
      <span></span>
    </div>
  </nav>
</template>

<style scoped lang="scss">

nav {
  @include flex(row, center, center);
  position: fixed;
  top: 2.5vh;
  right: 10vw;
  z-index: 999;
  .btn-6 {
    @include font-style($font-size: 1.3vw, $font-weight: 500, $color: $btn-color);
    text-decoration: none;
    transition: 0.5s ease-in-out;
    overflow: hidden;
    width: 100%;
    max-width: 20vw;
    position: relative;
    text-align: center;
    padding: 15px 35px;
    border-radius: 3px;

    & > * {
      transition: 0.5s ease-in-out;
    }

    span {
      @include absolute();
      display: block;
      @include size(0);
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
}

</style>
