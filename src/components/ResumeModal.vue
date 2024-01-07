<script setup>
import { ref } from 'vue'

import debounce from 'lodash/debounce'
import Close from '@/components/icons/Close.vue'
import Tabs from '@/components/Tabs.vue'

// import useModalStore from '@/stores/modalas'

defineProps({
  show: Boolean,
})
const emit = defineEmits(['close'])
// const store = useModalStore()
const modal = ref(null)

const removed = debounce(() => {
  emit('close')
}, 1000)

function closeModal() {
  modal.value.classList.add('removing')
  removed()
}
</script>

<template>
  <Teleport to="body">
    <div v-if="show" ref="modal" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="close-modal">
            <Close :width="20" :height="20" @click="closeModal" />
          </div>

          <Tabs />
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
    height: 90vh;
    margin: 0 auto;
    padding: 20px 30px;
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
