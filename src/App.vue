<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import NavBar from '@/components/NavBar.vue'

const loc = useRoute()
const router = useRouter()
const currentRouter = ref(null)
const main = ref(null)

watch(
  loc,
  () => {
    currentRouter.value = router.options.routes.filter(e => e.name !== loc.name)
  },
  { deep: true, immediate: true },
)
</script>

<template>
  <main ref="main" :class="{ main: loc.fullPath === '/' }">
    <NavBar :title="currentRouter[0]?.meta?.title" :path="currentRouter[0]?.path" />
    <RouterView :key="loc.fullPath" />
  </main>
</template>

<style scoped lang="scss">
main {
  @include flex(row, center, center);
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='69.282' height='40' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M34.641-20v80m34.64-40L0-20m69.282 80L0 20m69.282 0L0 60m69.282-80L0 20m69.282-40v80M0-20v80M34.64 40l11.547-20m11.547 20l11.547 20M34.641 40h23.094m11.547-20L57.735 40M46.188 20L34.641 40l11.547 20h23.094L80.83 40 69.282 20H46.188zM34.641 40l11.547-20m11.547 20l11.547 20M34.641 40h23.094m11.547-20L57.735 40M46.188 20L34.641 40l11.547 20h23.094L80.83 40 69.282 20H46.188zM34.641 0l11.547-20M57.735 0l11.547 20M34.642 0h23.093m11.547-20L57.735 0M46.188-20L34.641 0l11.547 20h23.094L80.83 0 69.282-20H46.188zM34.641 40L23.094 20M11.547 40L0 60m34.64-20H11.548M0 20l11.547 20m11.547-20l11.547 20-11.547 20H0l-11.547-20L0 20h23.094zM34.641 0L23.094-20M11.547 0L0 20M34.64 0H11.548M0-20L11.547 0m11.547-20L34.641 0 23.094 20H0L-11.547 0 0-20h23.094z'  stroke-width='1' stroke='hsla(259, 0%, 71%, 0.2)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  position: relative;
  background-attachment: fixed;
  min-height: 100%;
  &.main {
    overflow: hidden;
    min-height: 100%;
  }
}
</style>
