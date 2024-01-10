<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import AnimatedButton from '@/components/AnimatedButton.vue'
import ArrowDown from '@/components/icons/ArrowDown.vue'
import TechIcons from '@/components/icons/TechIcons.vue'
import Accordion from '@/vendors/accordion.js'

defineProps({
  age: Number,
})

const router = useRouter()

const skills = ref('.skills')

function Acc(el) {
  return new Accordion(el)
}

onMounted(() => {
  Acc(skills.value)
})

const techName = [
  'Javascript',
  'Vue',
  'React Native',
  'Vuetify',
  // 'Adobe Photoshop',
  'Git',
  'Github',
  'Axios',
  'Lodash',
  'Bootstrap',
  // 'bower',
  // 'Compass',
  'HTML5',
  'Sass',
  'CSS3',
  'Figma',
  // 'Gitlab',
  // 'Gulp',
  // 'jQuery',
  // 'Keystonejs',
  'npm',
  // 'Wordpress',
  'yarn',
  'Postman',
]

function handleNav() {
  router.push({
    path: '/portfolio',
  })
}
function handleDownload() {
  const filePath = '/VladimirGlushkov-frontend-developer.pdf'
  const link = document.createElement('a')
  link.href = filePath
  link.download = filePath.substring(filePath.lastIndexOf('/') + 1)
  link.click()
}

function handleHH() {
  const url = 'https://kopeysk.hh.ru/resume/f3f47071ff016f67f00039ed1f434f44666d53'
  window.open(url, '_blank').focus()
}

const backup = true
</script>

<template>
  <div class="content">
    <div class="row">
      <div class="photo-wrapper">
        <img src="@/assets/740080754.jpeg" class="photo">

        <AnimatedButton
          class="button"
          title="В портфолио"
          size="medium"
          @click="handleNav"
        />

        <AnimatedButton
          class="button"
          title="Скачать резюме"
          size="medium"
          @click="handleDownload"
        />

        <AnimatedButton
          class="button"
          title="На hh.ru"
          size="medium"
          @click="handleHH"
        />
      </div>
      <div class="name-wrapper">
        <h1>Владимир Глушков</h1>

        <div class="employment">
          <div class="item">
            <strong>Занятость:</strong> полная занятость, частичная занятость, проектная работа.
          </div>
          <div class="item">
            <strong>График работы:</strong> полный день, гибкий график, удаленная работа.
          </div>
          <div class="item">
            <strong>Для связи:</strong>
            <a href="https://t.me/fenrirheimr" target="_blank">@fenrirheimr</a>,
            <a href="tel:+79068635088" target="_blank">8 (906) 863-50-88</a>,
            <a href="mailto:xhtmlblog@gmail.com" target="_blank">xhtmlblog@gmail.com</a>,
            <a href="mailto:fenrirheimr@gmail.com" target="_blank">fenrirheimr@gmail.com</a>
          </div>
          <div class="item">
            <details ref="skills" class="skills" open>
              <summary>
                Навыки
                <ArrowDown class="arrow" :width="24" :height="24" />
              </summary>
              <div class="s-content">
                <div class="s-row">
                  <div class="title">
                    Language:
                  </div>
                  <div class="text">
                    JavaScript(ES6+), HTML5, CSS3/SCSS;
                  </div>
                </div>
                <div class="s-row">
                  <div class="title">
                    JS frameworks:
                  </div>
                  <div class="text">
                    Vue.js, React Native;
                  </div>
                </div>
                <div class="s-row">
                  <div class="title">
                    UI frameworks:
                  </div>
                  <div class="text">
                    vuetify, bootstrap, bulma;
                  </div>
                </div>
                <div class="s-row">
                  <div class="title">
                    Dev Tools:
                  </div>
                  <div class="text">
                    yarn, npm, webpack, gulp;
                  </div>
                </div>
                <div class="s-row">
                  <div class="title">
                    CVS:
                  </div>
                  <div class="text">
                    git;
                  </div>
                </div>
                <div class="s-row">
                  <div class="title">
                    Design Tools:
                  </div>
                  <div class="text">
                    Figma, Adobe Photoshop;
                  </div>
                </div>
                <div class="s-row">
                  <div class="title">
                    OS:
                  </div>
                  <div class="text">
                    Linux;
                  </div>
                </div>
                <div class="s-row">
                  <div class="title">
                    IDE:
                  </div>
                  <div class="text">
                    Webstorm, IntelliJ, Android Studio;
                  </div>
                </div>
                <div v-if="!backup" class="c">
                  Platforms: Nodejs,<br>
                  Protocols: HTTP, HTTPS, REST,<br>
                  <br>
                  DB: MySQL, Mongo,<br>
                  Сборка: Jenkins,<br>
                </div>
              </div>
            </details>
            <div class="tech-icon-wrapper">
              <TechIcons v-for="(name, i) in techName" :key="i" :name="name" class="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  @include scrollable(#352E2E, transparent);
  padding: 30px;
  .row {
    @include flex(row, flex-start, flex-start);
    width: 100%;
    margin-bottom: 10px;
    gap: 2vw;
    &:last-of-type {
      margin-bottom: 0;
    }

    .photo-wrapper {
      @include flex(column, flex-start, center);
      max-width: 384px;
      gap: 2vw;
      .photo {
        width: 20vw;
        height: 20vw;
      }

      .button {}
    }

    .name-wrapper {
      width: 100%;
      h1 {
        @include font-style($font-size: 3vw, $font-weight: 500, $line-height: 120%, $color: #352E2E);
        margin-top: 0;
      }
      .employment {
        @include flex(column, flex-start, flex-start);
        @include font-style($font-size: 1.5vw, $font-weight: 400, $line-height: 120%, $color: #352E2E);
        gap: 1.3vw;
        .item {
          @include flex(row, flex-start, flex-start);
          width: 100%;
          gap: .3vw;
        }
        .skills {
          width: 40%;
          summary {
            @include flex(row, flex-start, center);
            @include font-style($font-size: 1.5vw, $font-weight: 700, $line-height: 120%, $color: #352E2E);
            list-style: none;
            &::-webkit-details-marker {
              display:none;
            }
            &:hover {
              cursor: pointer;
            }
            .arrow {}
          }
          .s-content {
            @include font-style($font-size: 1vw, $font-weight: 400, $line-height: 120%, $color: #352E2E);
            margin-top: 20px;
            .s-row {
              @include flex(row, flex-start, center);
              margin-bottom: 1vw;
              .title {
                font-weight: 700;
                margin-right: 10px;
              }
              .text {}
            }
          }
          &[open] {
            .arrow {
              animation: spin 0s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            }
          }
        }
        .tech-icon-wrapper {
          @include flex(row, flex-start, flex-start);
          width: 50%;
          flex-wrap: wrap;
          //width: 100%;
          gap: 2vw 3vw;
          margin-top: 54px;
        }
      }
    }
  }
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
    }
  }
  .divider {
    width: 100%;
    border: none;
    margin: 20px 0;
  }
  @keyframes slideUp {
    0% {
      max-height: var(--details-height);
      opacity: 1;
    }

    100% {
      max-height: 0;
      opacity: 0;
    }
  }

  @keyframes slideDown {
    0% {
      max-height: 0;
      opacity: 0;
    }

    100% {
      max-height: var(--details-height);
      opacity: 1;
    }
  }
  @keyframes spin {
    100% {
      transform:rotate(-180deg);
    }
  }
}
</style>
