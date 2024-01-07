<script setup>
import { useRouter } from 'vue-router'

import AnimatedButton from '@/components/AnimatedButton.vue'

const props = defineProps({
  title: String,
  path: String,
})

const router = useRouter()

function handleNav() {
  router.push({
    path: props.path,
  })
}
</script>

<template>
  <nav>
    <AnimatedButton
      :title="props.title"
      size="medium" @click="handleNav"
    />
  </nav>
</template>

<style scoped lang="scss">
nav {
  @include flex(row, center, center);
  position: fixed;
  top: 2.5vh;
  right: 10vw;
  z-index: 999;
}
</style>
