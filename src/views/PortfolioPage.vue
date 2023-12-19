<script setup>
import { useRoute } from 'vue-router'
import Loader from "@/components/Loader.vue";
import Portfolio from "@/partials/Portfolio.vue";

const route = useRoute()

// console.log('>>>>', route.meta)

</script>

<template>
  <section>
    <Portfolio />
    <Teleport to="body">
      <Loader :spinner="route.meta.spinner" :duration="route.meta.duration" />
    </Teleport>
  </section>
</template>
<style scoped lang="scss">
section {
  @include flex(column, center, center);
  height: 100%;
}
</style>
