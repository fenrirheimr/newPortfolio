<script setup>
const props = defineProps({
  title: String,
  icon: Object,
})
</script>

<template>
  <div class="tag">
    <div class="title">
      {{ props.title }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.tag {
  @include flex(row, flex-start, center);
  .title {
    @include font-style($font-size: calc(9vw * 10 / 100), $font-weight: 400, $line-height: 120%, $color: #352E2E);
    background: rgba(204, 204, 204, 0.5);
    border-radius: 5px;
    padding: 5px 10px;
  }
}
</style>
