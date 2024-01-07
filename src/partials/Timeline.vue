<script setup>
import { onMounted, ref } from 'vue'
import { modalStore } from '@/stores/modalStore.js'

import Tag from '@/components/Tag.vue'
import PortfolioModal from '@/components/PortfolioModal.vue'

const props = defineProps({
  data: Array,
})

const showModal = ref(false)

onMounted(() => {
  const items = document.querySelectorAll('.item')
  items.forEach((item, index) => {
    (index % 2 === 0) ? item.classList.add('odd') : item.classList.add('even')
  })
})

function handleDetail(item) {
  modalStore().content = item
  showModal.value = true
}
</script>

<template>
  <div class="timeline">
    <div v-for="(item, index) in props.data" :key="index" class="portfolio-row">
      <header class="year-title" :class="{ isLastYear: item.isYear }">
        {{ item.year }}
      </header>
      <div
        v-for="(content, i) in item.items"
        :id="content._id"
        :key="i"
        class="item"
        :class="{ redone: content.isRedone }"
      >
        <div class="item-content">
          <div class="item-title">
            {{ content.title }}
          </div>
          <div class="item-tags">
            <Tag v-for="(tag, n) in content.stack" :key="n" :title="tag" :icon="{}" />
          </div>
          <div class="item-description">
            {{ content.descriptionShort }}
          </div>
          <div class="item-btn" @click="handleDetail(content)">
            Описание проекта
          </div>
        </div>
      </div>
    </div>
    <PortfolioModal :show="showModal" @close="showModal = false" />
  </div>
</template>

<style lang="scss" scoped>
.timeline {
  .portfolio-row {
    @include flex(column, flex-start, flex-start);
    width: 60vw;
    .year-title {
      @include font-style($font-size: calc(20vw * 10 / 100), $font-weight: 500, $line-height: 120%);
      @include flex(row, center, center);
      width: 100%;
      position: sticky;
      top: 20px;
      text-shadow:
          0 1px 0 #ccc,
          0 2px 0 #ccc,
          0 3px 0 #ccc,
          0 4px 0 #ccc,
          0 10px 10px rgba(0, 0, 0, 0.3);

    }
    .item {
      width: 50%;
      height: 100%;
      //min-width: 600px;
      &.odd {
        align-self: flex-end;
        padding: 3em 0 3em 4em;
        border-left: 1px solid #ccc;
      }
      &.even {
        padding: 3em 4em 3em 0;
        border-left: 0;
        border-right: 1px solid #ccc;
        align-self: flex-start;
        text-align: right;
        .item-tags {
          justify-content: flex-end;
        }
      }
      &.redone {
        .item-content {
          opacity: .5;
          background: rgba(204, 204, 204, 0.5);
        }
      }
      &-content {
        @include font-style($font-size: calc(10vw * 10 / 100), $font-weight: 400, $line-height: 120%);
        padding: 30px 30px;
        background-color: #fff;
        box-shadow: 0 50px 30px rgba(0, 0, 0, 0.3);
      }
      &-title {
        @include font-style($font-size: calc(20vw * 10 / 100), $font-weight: 500);
        margin-bottom: 1.5vh;
      }
      &-tags {
        @include flex(row, flex-start, center);
        gap: 1vw;
        margin-bottom: 1vw;
      }
      &-description {
        margin-bottom: 3.5vh;
      }
      &-customer {
        margin-bottom: 1vw;
      }
      &-btn {
        display: inline-flex;
        padding: 10px 15px;
        width: auto;
        background: rgba(204, 204, 204, 0.5);
        border-radius: 5px;
        &:hover {
          cursor: pointer;
          background: rgba(0, 0, 0, 0.3);
        }
      }
    }
    &:first-of-type,
    &:last-of-type {
      .year-title {
        @include font-style($font-size: calc(50vw * 10 / 100), $font-weight: 500, $line-height: 120%);
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
            0 40px 30px rgba(0, 0, 0, 0.3);
      }
      &:last-of-type {
        .item {
          display: none;
        }
      }
    }
  }
}
</style>
