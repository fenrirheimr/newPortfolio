<script setup>
import { tabsStore } from '@/stores/tabs'

function selectTab(selectedTab) {
  tabsStore().tabs.find(tab => tab.isActive = false)
  selectedTab.isActive = true
}

function getAge(date) {
  const now = new Date()
  const birthDate = new Date(date)
  const diff = now.getTime() - birthDate.getTime()
  const y = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
  const m = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365.25))
    / (1000 * 60 * 60 * 24 * (365.25 / 12)),
  )
  const d = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * (365.24 / 12))) / (1000 * 60 * 60 * 24),
  )
  return { y, m, d }
}
</script>

<template>
  <div class="tabs-wrapper">
    <div class="tabs">
      <div
        v-for="(tab, i) in tabsStore().tabs"
        :key="i"
        class="tab"
        :class="{ 'is-active': tab.isActive }"
        @click="selectTab(tab)"
      >
        {{ tab.name }}
      </div>
    </div>
    <div class="tab-content">
      <component
        :is="tab.isActive ? tab.component : null"
        v-for="(tab, i) in tabsStore().tabs"
        :key="i"
        :class="tab.theme"
        :age="getAge('02.11.1984').y"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabs-wrapper {
  height: 100%;
  overflow: hidden;
  .tabs {
    @include flex(row, flex-start, center);
    height: 60px;
    .tab {
      @include flex(row, center, center);
      @include font-style($font-size: 1vw, $font-weight: 300, $line-height: 120%, $color: rgb(31, 35, 40));
      align-items: center;
      background-color: initial;
      border: 0;
      border-radius: 0.375rem;
      cursor: pointer;
      line-height: 30px;
      height: 30px;
      padding: 0 0.5rem;
      position: relative;
      text-align: center;
      white-space: nowrap;
      &:hover {
        background: rgba(208, 215, 222, 0.32);
      }
      &.is-active {
        font-weight: 500;
        &:after {
          background: #fd8c73;
          border-radius: 0.375rem;
          bottom: calc(50% - 25px);
          content: '';
          height: 2px;
          position: absolute;
          right: 50%;
          transform: translate(50%, -50%);
          width: 100%;
          z-index: 1;
        }
      }
    }
  }
  .tab-content {
    width: 100%;
    height: calc(100% - 60px);
    .dark {
      @include scrollable(#d16daa, transparent);
      background: #282A36;
      height: 100%;
    }
    .light {
      @include scrollable(#352E2E, transparent);
      background: #F8F8F2;
      height: 100%;
    }
  }
}
</style>
