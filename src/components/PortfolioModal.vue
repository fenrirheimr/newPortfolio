<script setup>
import { ref, defineEmits, watch } from "vue";
import { storeToRefs } from 'pinia'
import debounce from "lodash/debounce";
import { modalStore } from '@/stores/modalStore.js'
import Close from '@/components/icons/Close.vue'
import Link from '@/components/icons/Link.vue'
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
//
function getFileTypeFromURL(url) {
  const extension = url && url.split(/[#?]/)[0].split('.').pop().trim();
  if(extension === 'mp4'){
    return `
    <video autobuffer="autobuffer" width="100%" autoplay="autoplay" loop="loop" playsinline="" muted="" preload="auto">
        <source src="${url}" type="video/mp4">
      </video>
    `;
  } else {
    return `<img alt="" src="${url}" style="max-width: 100%;" />`;
  }
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
              <h1>{{ content.title }}</h1>
              <div class="project-tags">
                <Tag v-for="tag in content.stack" :title="tag" :icon="{}" />
              </div>
            </div>
            <div class="project-description">
              {{ content.descriptionShort }}
            </div>
            <div class="project-description" v-if="content.descriptionExtended">
              {{ content.descriptionExtended }}
            </div>
            <div class="project-images" v-if="content.projectImages.length">
              <div class="img-wrapper" v-for="(src, i) in content.projectImages" :key="i">
                <img :src="src" />
              </div>
            </div>
            <div class="project-images" v-else>
              <div class="img-wrapper no-image" v-for="(n, i) in 3" :key="i">
                no images
              </div>
            </div>
            <div class="project-description">
              {{ content.myResponsibility }}
            </div>

            <div class="project-extensions" v-if="content.projectLinks">
              <span class="label">Проект:</span>
              <a v-for="link in content.projectLinks" :href="link.url" target="_blank">{{ link.title }} <Link class="icon" /></a>
            </div>

            <div class="project-customer">
              <span class="label">Для компании:</span>
              <a v-if="content.projectCustomer.url" :href="content.projectCustomer.url" target="_blank">
                {{ content.projectCustomer.title }}
                <Link class="icon" />
              </a>
              <span v-else>{{ content.projectCustomer.title }}</span>
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
      .label {
        @include font-style($font-size: calc(9vw * 10 / 100));
      }
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
          @include flex(row, flex-start, stretch);
          width: 100%;
          gap: 1vw;
          margin-bottom: 2.5vh;
          max-height: 40vh;
          overflow: hidden;
          .img-wrapper {
            border-radius: 5px;
            img {
              max-width: 100%;
              height: auto;
              min-height: 100%;
            }
            &.no-image {
              @include font-style($font-size: calc(10vw * 10 / 100), $font-weight: 400, $line-height: 120%, $color: #352E2E);
              @include flex(row, center, center);
              background: rgba(204, 204, 204, 0.6);
              width: 100%;
              height: 20vh;
            }
          }
        }
        &-description {
          @include font-style($font-size: calc(11vw * 10 / 100), $font-weight: 400, $line-height: 120%, $color: #352E2E);
          margin-bottom: 1.2vw;
        }
        &-extensions,
        &-ext-link {
          @include flex(row, flex-start, center);
          @include font-style($font-size: calc(11vw * 10 / 100), $font-weight: 400, $line-height: 120%, $color: #352E2E);
          gap: 1vw;
          margin-bottom: 1.2vw;
        }
        &-customer {
          @include flex(row, flex-start, center);
          @include font-style($font-size: calc(11vw * 10 / 100), $font-weight: 400, $line-height: 120%, $color: #352E2E);
          gap: 1vw;
        }
        &-extensions,
        &-customer {
          a {
            @include flex(row, flex-start, center);
            gap: .2vw;
            .icon {
              width: 18px;
              height: 18px;
            }
          }
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
