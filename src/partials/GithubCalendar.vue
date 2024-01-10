<script setup>
import { declOfNum } from '@/utils/declOfNum'

const props = defineProps({
  data: Array,
})

// Array.prototype.move = function(from, to) {
//   this.splice(to, 0, this.splice(from, 1)[0]);
// };

function moveArrayItems(arr, old_index, new_index) {
  if (arr && arr.length)
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
  return arr
}

function itemsOnMonth(items) {
  const res = Object.values(items.reduce((r, cur) => {
    const key = `k${cur.month}`; // символ "k" добавлен, чтобы автоматически не сортировало по цифровым ключам
    (r[key] = r[key] || []).push(cur)
    return r
  }, {}))

  const blank = []
  for (let i = res.length; i < 12; i++)
    res.push(blank)

  const temp = res.map(items => ({
    month: items[0]?.month,
    items,
    id: items[0]?._id,
  }))

  for (let i = 0; i <= 11; i++) {
    if (temp[0].month > temp.length)
      moveArrayItems(temp, 0, temp[0].month)
      // temp.move(0, temp[0].month)
    else
      moveArrayItems(temp, 0, temp[0].month - 1)
      // temp.move(0, temp[0].month - 1)
  }
  return temp
}
function handleClick(id) {
  const element = document.getElementById(id)
  element.scrollIntoView({ block: 'start', behavior: 'smooth' })
}

function getMonthName(monthNumber) {
  const date = new Date()
  date.setMonth(monthNumber - 1)
  const months = 'январе, феврале, марте, апреле, мае, июне, июле, августе, сентябре, октябре, ноябре, декабре'.split(',')
  // return date.toLocaleString('ru', { month: 'long' });
  return months[date.getMonth()]
}
</script>

<template>
  <div class="github-calendar">
    <div v-for="(item, i) in [...props.data].reverse()" :key="i" class="calendar-year">
      <div class="title">
        {{ item.year }}
      </div>
      <div class="parent">
        <div
          v-for="(cont, ind) in itemsOnMonth(item.items)"
          :key="ind"
          class="block"
          :data-level="cont.items.length"
          :class="`div${ind + 1}`"
          @click="handleClick(cont.id)"
        >
          {{ cont.items.length > 0 ? cont.items.length : null }}
          <div v-if="cont.items.length > 0" class="tooltip">
            {{ declOfNum(cont.items.length, ['работа', 'работы', 'работ'], true) }} в {{ getMonthName(cont.month) }} {{ item.year }} года
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.github-calendar {
  @include flex(row, flex-start, flex-start);
  flex-wrap: nowrap;
  margin-bottom: 100px;
  .calendar-year {
    @include flex(row, space-around, flex-start);
    flex-wrap: wrap;
    width: 75px;
    height: 6vw;
    background: #fff;
    .title {
      @include font-style($font-size: calc(7vw * 10 / 100), $font-weight: 500, $line-height: 120%);
      width: 100%;
    }
    .block{
      @include font-style($font-size: calc(5.21vw * 10 / 100), $font-weight: 400, $line-height: 120%, $color: rgba(255, 255, 255, .8));
      background: #ebedf0;
      width: 22px;
      height: 22px;
      outline: 1px solid rgba(27, 31, 35, 0.06);
      outline-offset: -1px;
      border-radius: 2px;
      padding: 2px 3px;
      position: relative;
      .tooltip {
        @include font-style($font-size: calc(7.21vw * 10 / 100), $font-weight: 400, $line-height: 120%, $color: rgba(255, 255, 255, .8));
        display: none;
        width: max-content;
        padding: 5px 7px;
        border-radius: 3px;
        position: absolute;
        bottom: 130%;
        left: 50%;
        background: rgba(0, 0, 0, .8);
        transform: translateX(-50%);
        z-index: 10;
        &:after {
          content: '';
          display: block;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 6px 5px 0 5px;
          border-color: rgba(0, 0, 0, .8) transparent transparent transparent;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      &:hover {
        cursor: pointer;
        .tooltip {
          display: block;
        }
      }
      &[data-level="0"] {
        cursor: default;
        pointer-events: none;
      }
      &[data-level="1"] {
        background: #9be9a8;
      }
      &[data-level="2"] {
        background: #40c463;
      }
      &[data-level="3"] {
        background: #30a14e;
      }
      &[data-level="4"] {
        background: #216e39;
      }
      &.green {
        --color-calendar-graph-day-L1-bg: #9be9a8;
        --color-calendar-graph-day-L2-bg: #40c463;
        --color-calendar-graph-day-L3-bg: #30a14e;
        --color-calendar-graph-day-L4-bg: #216e39;
        --color-calendar-graph-day-L1-border: rgba(27, 31, 35, 0.06);
        --color-calendar-graph-day-L2-border: rgba(27, 31, 35, 0.06);
        --color-calendar-graph-day-L3-border: rgba(27, 31, 35, 0.06);
        --color-calendar-graph-day-L4-border: rgba(27, 31, 35, 0.06);
      }
    }

    .parent {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-column-gap: 3px;
      grid-row-gap: 3px;
      .div1 { grid-area: 1 / 1 / 2 / 2; }
      .div2 { grid-area: 2 / 1 / 3 / 2; }
      .div3 { grid-area: 3 / 1 / 4 / 2; }
      .div4 { grid-area: 4 / 1 / 5 / 2; }
      .div5 { grid-area: 1 / 2 / 2 / 3; }
      .div6 { grid-area: 2 / 2 / 3 / 3; }
      .div7 { grid-area: 3 / 2 / 4 / 3; }
      .div8 { grid-area: 4 / 2 / 5 / 3; }
      .div9 { grid-area: 1 / 3 / 2 / 4; }
      .div10 { grid-area: 2 / 3 / 3 / 4; }
      .div11 { grid-area: 3 / 3 / 4 / 4; }
      .div12 { grid-area: 4 / 3 / 5 / 4; }
    }
  }
}
</style>
