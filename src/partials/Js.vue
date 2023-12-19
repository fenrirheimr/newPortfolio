<script setup>

defineProps({
  age: Number
})

import skillStore from "@/stores/skills.js";

const store = skillStore();

store.fetchSkills()

console.log('???', store.getSkills.items)

</script>

<template>
  <div class="content">
    <div class="js-row">
      <div class="global">
        <div class="command">import</div>
        <div class="object">{ AbstractHuman } </div>
        <div class="command">from</div>
        <div class="value">'world/humankind';</div>
      </div>
    </div>
    <div class="js-row">
      <div class="global">
        <div class="command">import</div>
        <div class="object">{ experience }</div>
        <div class="command">from</div>
        <div class="value">'head/brain';</div>
      </div>
    </div>
    <div class="js-row">
      <div class="global">
        <div class="command">import</div>
        <div class="object">skillStore</div>
        <div class="command">from</div>
        <div class="value">'@/stores/skills.js';</div>
      </div>
    </div>

    <hr class="divider" />

    <div class="js-row">
      <div class="global">
        <div class="command">export default class</div>
        <div class="class-name">Myself</div>
        <div class="command">extends</div>
        <div class="object">AbstractHuman</div>
        <i class="symbol">{</i>
      </div>
    </div>
    <div class="js-row two-level">
      <div class="global ml20">
        <div class="command">constructor</div>
        <i class="symbol">(</i>
        <div class="var">props</div>
        <i class="symbol">)</i>
        <i class="symbol">{</i>
        <div class="inner">

          <div class="global">
            <div class="num">super</div>
            <i class="symbol">(</i>
            <div class="var">props</div>
            <i class="symbol">)</i>
          </div>
          <div class="global">
            <div class="num mr0">this</div>
            <div class="object ml0">.state</div>
            <i class="symbol"> = {</i>
            <div class="inner">
              <div class="row">
                <div class="object">name:</div>
                <div class="text mr0">'Vladimir Glushkov'</div>
                <i class="symbol ml0">,</i>
              </div>
              <div class="row">
                <div class="object">age:</div>
                <div class="text ml0">{{ age }} years</div>
                <i class="symbol ml0">,</i>
              </div>
              <div class="row">
                <div class="object">experience:</div>
                <div class="object ml0">experience.items</div>
                <i class="symbol ml0">,</i>
              </div>
              <div class="row">
                <div class="object">skills: [</div>
                <div class="skills mr0">
                  <div class="row">lang: [
                    <div class="text">'HTML/HAML'</div>,
                    <div class="text">'SASS/SCSS'</div>,
                    <div class="text">'JS'</div>
                    ],</div>
                  <div class="row">soft: [
                    <div class="text">'Ubuntu Linux'</div>,
                    <div class="text">'WebStorm'</div>,
                    <div class="text">'Photoshop/Figma'</div>
                    ] ,</div>
                  <div class="row">frameworks: [
                    <div class="text">'vue.js'</div>,
                    <div class="text">'react native'</div>,
                    <div class="text">'vuetify'</div>,
                    <div class="text">'bulma'</div>,
                    <div class="text">'bootstrap'</div>
            ]</div>
                </div>
                <i class="symbol ml0">],</i>
              </div>
              <div class="row">
                <div class="object">phoneNumber:</div>
                <div class="num ml0">8.906.863.50.88</div>
                <i class="symbol ml0">,</i>
              </div>
              <div class="row">
                <div class="object">email:</div>
                <div class="array">
                  <i class="symbol ml0">[</i>
                  <a href="mailto:xhtmlblog@mail.com" target="_blank">'xhtmlblog@mail.com'</a><i class="symbol">,</i>
                  <a href="mailto:fenrirheimr@mail.com" target="_blank">'fenrirheimr@mail.com'</a>
                  <i class="symbol mr0">]</i>
                </div>
                <i class="symbol ml0">,</i>
              </div>
            </div>
            <i class="symbol">};</i>
          </div>
        </div>
        <i class="symbol">}</i>
      </div>

      <hr class="divider" />

      <div class="global ml20">
        <div class="func">
          getExperience <i class="symbol">()</i> <i class="symbol">{</i>
        </div>
        <div class="inner">
          <div class="row">
            <div class="command">const</div>
            <div class="object">newWork</div>
            <div class="command">=</div> <i class="symbol">[</i>
            <div class="inner">
              <div class="row">
                {
                <div class="inner mx5">
                  <div class="row">
                    year: <div class="num">06.2019-08.2023</div>,
                  </div>
                </div>
                <div class="inner mx5">
                  <div class="row">
                    employer: <div class="text"><a href="https://Chrono.tech/" target="_blank" rel="nofollow">'Chrono.tech'</a></div>,
                  </div>
                </div>
                <div class="inner mx5">
                  <div class="row">
                    position: <div class="text">'frontend developer'</div>
                  </div>
                </div>
                <div class="inner mx5">
                  <div class="row">
                    job-responsibilities: <div class="text">'Frontend for the timex.io crypto exchange and for the management system of this exchange<br />
                    Development of a mobile application for the exchange using React Native'</div>
                  </div>
                </div>
                },
              </div>
              <div class="row">
                {
                <div class="inner mx5">
                  <div class="row">
                    year: <div class="num">07.2018-06.2019</div>,
                  </div>
                </div>
                <div class="inner mx5">
                  <div class="row">
                    employer: <div class="text">'P&B Stratwork'</div>,
                  </div>
                </div>
                <div class="inner mx5">
                  <div class="row">
                    position: <div class="text">'frontend developer'</div>
                  </div>
                </div>
                },
              </div>
              <div class="row">
                {
                <div class="inner mx5">
                  <div class="row">
                    year: <div class="num">07.2017-12.2017</div>,
                  </div>
                </div>
                <div class="inner mx5">
                  <div class="row">
                    employer: <div class="text">'D-Element Internet Agency'</div>,
                  </div>
                </div>
                <div class="inner mx5">
                  <div class="row">
                    position: <div class="text">'frontend developer'</div>
                  </div>
                </div>
                },
              </div>
              <div class="row">
                {
                <div class="inner mx5">
                  <div class="row">
                    year: <div class="num">2016-2017</div>,
                  </div>
                </div>
                <div class="inner mx5">
                  <div class="row">
                    employer: <div class="text"><a href="https://radar-online.ru/" target="_blank" rel="nofollow">'Radar Advertising'</a></div>,
                  </div>
                </div>
                <div class="inner mx5">
                  <div class="row">
                    position: <div class="text">'frontend developer'</div>
                  </div>
                </div>
                }
              </div>
            </div>
            <i class="symbol">];</i>
          </div>
        </div>
        <div class="inner">
          <div class="row">
            <div class="command">return</div> [ ...newWork, ...<div class="num">this</div>.experience];
          </div>
        </div>
        <i class="symbol">}</i>
      </div>
    </div>
    <i class="symbol">}</i>
  </div>
</template>
<style scoped lang="scss">
.content {
  @include scrollable(#d16daa, transparent);
  @include font-style($font-size: 1vw, $font-weight: 400, $line-height: 120%, $color: #F8F8F2);
  padding: 30px;
  .symbol {
    font-style: normal;
    color: #F8F8F2;
    margin: 0 5px;
  }
  .js-row {
    @include flex(row, flex-start, center);
    flex-wrap: wrap;
    &.two-level {
      margin-left: 20px;
    }
    .global {
      @include flex(row, flex-start, center);
      width: 100%;
      flex-wrap: wrap;
      margin-bottom: 10px;
      .inner {
        width: 100%;
        margin: 10px 0 10px 20px;
        &.mx5 {
          margin: 5px 0;
          margin-left: 20px;
        }
        .row {
          @include flex(row, flex-start, flex-start);
          width: 100%;
          margin-bottom: 10px;
          flex-wrap: wrap;
          &:last-of-type {
            margin-bottom: 0;
          }
          .skills {
            width: 100%;
            margin-left: 20px;
          }
        }
      }
      .mr0 {
        margin-right: 0 !important;
      }
      .ml0 {
        margin-left: 0 !important;
      }
      .ml20 {
        margin-left: 20px !important;
      }
      .command {
        @include font-style($font-size: 1vw, $font-weight: 400, $line-height: 120%, $color: #FF79C6);
        margin: 0 10px;
      }
      .value {
        @include font-style($font-size: 1vw, $font-weight: 400, $line-height: 120%, $color: #F1FA8C);
      }
      .object {
        @include font-style($font-size: 1vw, $font-weight: 400, $line-height: 120%, $color: #F8F8F2);
        margin: 0 5px;
      }
      .class-name {
        @include font-style($font-size: 1vw, $font-weight: 400, $line-height: 120%, $color: #8BE9FD);
      }
      .var {
        @include font-style($font-size: 1vw, $font-weight: 400, $line-height: 120%, $color: #FFB86C);
      }
      .func, {
        @include font-style($font-size: 1vw, $font-weight: 400, $line-height: 120%, $color: #50FA78);
        width: 100%;
      }
      .num {
        color: #9580FF;
        margin: 0 5px;
      }
      .text {
        color: #F1FA8C;
        margin: 0 5px;
      }
      a {
        color: #F1FA8C;
        text-decoration: none;
        position: relative;
        z-index: 1;
        &:hover {
          &:before {
            display: block;
          }
        }
        &:before {
          content: '';
          position: absolute;
          top: -5px;
          right: -5px;
          bottom: -5px;
          left: -5px;
          background: #FF5555;
          display: none;
          z-index: -1;
        }
      }
    }
  }
  .divider {
    width: 100%;
    border: none;
    margin: 20px 0;
  }
}
</style>
