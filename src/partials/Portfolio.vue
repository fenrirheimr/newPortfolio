<script setup>
import { ref, onMounted } from 'vue'
import debounce from 'lodash/debounce'
import { modalStore } from '@/stores/modalStore.js'
import  portfolio from '@/data/portfolio.json'


import PortfolioModal from "@/components/PortfolioModal.vue";
import Tag from "@/components/Tag.vue";

defineProps({
  title: String,
})

let showModal = ref(false);
const container = ref(null);

const isLoaded = debounce(() => {
  container.value.classList.add('loaded');
}, 1200)

let temp =  Object.values(portfolio.reduce((r, cur) => {
  const key = 'k' + cur['year']; // символ "k" добавлен, чтобы автоматически не сортировало по цифровым ключам
  (r[key] = r[key] || []).push(cur);
  return r;
}, {}))

const result = temp.map(item => ({
  year: item[0].year,
  items: item
}))

const handleDetail = (item) => {
  modalStore().content = item
  showModal.value = true
}


onMounted(() => {
  isLoaded()
  let items = document.querySelectorAll('.item');
  items.forEach((item, index) => {
    (index % 2 == 0) ? item.classList.add('odd') : item.classList.add('even')
  });
});


</script>

<template>
  <div class="container">
    <div class="portfolio-wrapper" ref="container">

      <div class="portfolio-row" v-for="(item, index) in result">
        <header class="year-title" :class="{'isLastYear' : item.isYear}">
          {{ item.year }}
        </header>
        <div class="item" v-for="(content, i) in item.items" :key="i">
          <div class="item-content">
            <div class="item-title">{{ content.name }}</div>
            <div class="item-tags">
              <Tag v-for="tag in content.stack" :title="tag" :icon="{}" />
            </div>
            <div class="item-description">{{ content.description }}</div>
            <div class="item-btn" @click="handleDetail(content)">Описание проекта</div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <PortfolioModal :show="showModal" @close="showModal = false" />

<!--  <div @click="showModal = !showModal" ref="showModalBtn" class="btn-6" @mouseenter="mouseMove" @mouseleave="mouseMove">-->
<!--    Смотреть-->
<!--    <span></span>-->
<!--  </div>-->
</template>

<style scoped lang="scss">

.container {
  @include flex(row, flex-start, flex-start);
  padding-top: 100px;
  .portfolio-wrapper {
    opacity: 0;
    width: 90vw;
    min-height: 2000px;
    &.loaded {
      animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    .portfolio-row {
      @include flex(column, flex-start, flex-start);
      width: 90vw;
      .year-title {
        @include font-style($font-size: calc(20vw * 10 / 100), $font-weight: 500, $line-height: 120%, $color: #352E2E);
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
        &-content {
          padding: 30px 30px;
          background-color: #fff;
          box-shadow: 0 50px 30px rgba(0, 0, 0, 0.3);
        }
        &-title {
          @include font-style($font-size: calc(20vw * 10 / 100), $font-weight: 500, $line-height: 120%, $color: #352E2E);
          margin-bottom: 1.5vh;
        }
        &-tags {
          @include flex(row, flex-start, center);
          gap: 1vw;
          margin-bottom: 1vw;
        }
        &-description {
          @include font-style($font-size: calc(11vw * 10 / 100), $font-weight: 400, $line-height: 120%, $color: #352E2E);
          margin-bottom: 1.5vh;
        }
        &-customer {
          @include font-style($font-size: calc(10vw * 10 / 100), $font-weight: 400, $line-height: 120%, $color: #352E2E);
          margin-bottom: 1vw;
        }
        &-btn {
          @include font-style($font-size: calc(10vw * 10 / 100), $font-weight: 400, $line-height: 120%, $color: #352E2E);
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
          @include font-style($font-size: calc(50vw * 10 / 100), $font-weight: 500, $line-height: 120%, $color: #352E2E);
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
}

.btn-6 {
  $btn-color: #352E2E;
  $btn-color-dark: shade($btn-color, 40%);
  @include font-style($font-size: 2vw, $font-weight: 500, $line-height: 120%, $color: $btn-color);

  text-decoration: none;
  line-height: $btn-height;
  transition: 0.5s ease-in-out;
  overflow: hidden;
  width: 100%;
  max-width: 20vw;
  position: relative;
  text-align: center;
  border: 1px solid currentColor;
  opacity: 0;
  &.loaded {
    animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

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
    color: tint($btn-color, 55%);
    cursor: pointer;
    span {
      @include size(225%, $btn-width*2.25);
    }
  }

  &:active {
    background-color: $btn-color;
  }
}

@keyframes text-pop-up-top {
  0% {
    opacity: 0;
    transform: translateY(0);
    //transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    opacity: 1;
    transform: translateY(50px);
    //transform-origin: 50% 50%;
  }
}

@keyframes slide-in-bottom {
  0% {
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    transform: translateY(30px);
    opacity: 1;
  }
}

</style>
