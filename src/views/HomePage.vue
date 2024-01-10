<script setup>
import { useRoute } from 'vue-router'
import Hello from '@/partials/Hello.vue'
import Loader from '@/components/Loader.vue'

// import test from "@/components/test.vue";
//
const route = useRoute()
</script>

<template>
  <section>
    <Hello title="Владимир Глушков" />
    <Teleport to="body">
      <Loader :spinner="route.meta.spinner" :duration="route.meta.duration" />
    </Teleport>
  </section>
</template>

<style scoped lang="scss">
section {
  @include flex(column, center, center);
  min-height: 100vh;
}
</style>
