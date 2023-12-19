<script setup>
import { ref, defineEmits, watch } from "vue";
import { storeToRefs } from 'pinia'
import debounce from "lodash/debounce";
import { modalStore } from '@/stores/modalStore.js'
import Close from '@/components/icons/Close.vue'
import Tag from "@/components/Tag.vue";

defineProps({
  show: Boolean,
})

const emit = defineEmits(['close'])
const modal = ref(null);
const { content } = storeToRefs(modalStore())

const removed = debounce(() => {
  emit('close')
}, 1000)

const closeModal = () => {
  modal.value.classList.add('removing');
  removed()
}

</script>

<template>
  <Teleport to="body">
    <div class="modal-mask" v-if="show" ref="modal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="close-modal">
            <Close :width="20" :height="20" @click="closeModal" />
          </div>

          <div class="modal-content project">
            <div class="project-header">
              <h1>{{ content.name }}</h1>
              <div class="project-tags">
                <Tag v-for="tag in content.stack" :title="tag" :icon="{}" />
              </div>
            </div>
            <div class="project-description">
              {{ content.description }}
            </div>
            <div class="project-description" v-if="content.descriptionExt">
              {{ content.descriptionExt }}
            </div>
            <div class="project-images" v-if="content.projectImages">
              <div class="img-wrapper" v-for="(src, i) in content.projectImages" :key="i">
                <img :src="src" />
              </div>
            </div>
            <div class="project-description">
              {{ content.descriptionFull }}
            </div>

            <div class="project-extensions" v-if="content.extensions">
              <a v-for="extension in content.extensions" :href="extension.link" target="_blank">{{ extension.text }}</a>
            </div>
            <div class="project-ext-link" v-if="content.exLink">
              <a :href="content.exLink.link">{{content.exLink.text}}</a>
            </div>

            <div class="item-customer">
              <a :href="content.customer?.link">{{ content.customer?.name }}</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal-mask {
  @include flex(row, center, center);
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .modal-container {
    width: 90vw;
    max-height: 90vh;
    height: 90vh;
    margin: 0 auto;
    padding: 30px;
    background-color: #fff;
    box-shadow: 0 50px 30px rgba(0, 0, 0, 0.3);
    animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    position: relative;
    .close-modal {
      @include absolute(20px, 30px, auto, auto);
      &:hover {
        cursor: pointer;
      }
    }
    .modal-content {
      @include flex(column, flex-start, flex-start);
      @include scrollable(#352E2E, transparent);
      width: 100%;
      margin-top: 40px;
      height: calc(100% - 40px);
      background: #F8F8F2;
      padding: 30px;
      .project {
        &-header {
          @include flex(row, space-between, flex-start);
          width: 100%;
          h1 {
            @include font-style($font-size: 3vw, $font-weight: 500, $line-height: 120%, $color: #352E2E);
            margin-top: 0;
            margin-bottom: 1vw;
          }
        }
        &-tags {
          @include flex(row, flex-start, center);
          gap: 1vw;
          margin-bottom: 1vw;
        }
        &-images {
          @include flex(row, flex-start, flex-start);
          width: 100%;
          gap: 1vw;
          margin-bottom: 2.5vh;
          max-height: 40vh;
          overflow: hidden;
          .img-wrapper {
            //height: 100%;
            img {
              max-width: 100%;
              //height: 100%;
            }
          }
        }
        &-description {
          @include font-style($font-size: calc(11vw * 10 / 100), $font-weight: 400, $line-height: 120%, $color: #352E2E);
          margin-bottom: 1.2vw;
        }
        &-extensions {
          @include font-style($font-size: calc(11vw * 10 / 100), $font-weight: 400, $line-height: 120%, $color: #352E2E);
          margin-bottom: 1.2vw;
          @include flex(row, flex-start, flex-start);
        }
      }
      .name-wrapper {

        .employment {
          @include flex(column, flex-start, flex-start);
          @include font-style($font-size: 1.5vw, $font-weight: 400, $line-height: 120%, $color: #352E2E);
          gap: 1.3vw;
          .skills {
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
        }
      }
    }
  }
  &.removing {
    .modal-container {
      animation: slide-out-blurred-top 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
    }
  }
}

.modal-wrapper {
  @include flex(row, center, center);
}



.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}


.sb-enter-active {}
.sb-leave-active {
  //transition: opacity 0.5s ease;
  .modal-container {
    //animation: swirl-in-fwd 0.6s ease-out both;
    background: red;
    animation: slide-out-blurred-top 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
  }
}

.sb-enter-from {
  .modal-container {
    background: red;
    animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
  }

}
.sb-leave-to {
  .modal-container {
    background: red;
    animation: slide-out-blurred-top 0.45s cubic-bezier(0.755, 0.050, 0.855, 0.060) both;
  }
}

@keyframes slide-in-blurred-top {
  0% {
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
}

@keyframes slide-out-blurred-top {
  0% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 0%;
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-1000px) scaleY(2) scaleX(0.2);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
}

@keyframes swirl-in-fwd {
  0% {
    transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    transform: rotate(0) scale(1);
    opacity: 1;
  }
}

@keyframes slide-in-fwd-center {
  0% {
    transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes slide-out-bck-center {
  0% {
    transform: translateZ(0);
    opacity: 1;
  }
  100% {
    transform: translateZ(-1400px);
    opacity: 0;
  }
}

</style>
