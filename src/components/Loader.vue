<script setup>
import { ref, onMounted } from 'vue'
import debounce from 'lodash/debounce'

const props = defineProps({
  spinner: Boolean,
  duration: Number,
})

const loaderWrapper = ref(null);
const spinner = ref(null);
let open = ref(false);

const isLoaded = debounce(() => {
  open.value = true;
}, props.duration || 1500)

const isLoading = debounce(() => {
  loaderWrapper.value.classList.add('open');
  if(props.spinner) {
    spinner.value.classList.add('open');
  }
  isLoaded()
}, props.duration || 1500)

onMounted(() => {
  isLoading()
});

</script>

<template>
  <div class="loader-wrapper" ref="loaderWrapper" v-if="!open">
    <div class="triangle left"></div>
    <div class="triangle right"></div>
    <span v-if="props.spinner" class="spinner" ref="spinner"></span>
  </div>
</template>
<style scoped lang="scss">
.loader-wrapper {
  .triangle {
    position:absolute;
    z-index:1;
    top:0;
    left:0;
    width:100%;
    height:100%;
    //background: #000;
    background: #171616 url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='48' height='48' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M5.323 7.811a10.233 10.233 0 01-11.77 0m60.894 0a10.234 10.234 0 01-11.77 0M-6.447 40.19a10.234 10.234 0 0111.77 0m37.354 0a10.235 10.235 0 0111.77 0m-24.562-7.817a10.234 10.234 0 01-11.77 0m0-16.746A10.234 10.234 0 0124 13.767c2.107 0 4.162.649 5.886 1.86'  stroke-linecap='square' stroke-width='1' stroke='hsla(258.5,59.4%,59.4%,1)' fill='none'/><path d='M15.627 5.323a10.234 10.234 0 010-11.77m16.746 0a10.234 10.234 0 010 11.77M15.627 54.447a10.233 10.233 0 010-11.77m16.746 0a10.234 10.234 0 010 11.77m7.817-24.562a10.234 10.234 0 010-11.77m-32.379 0a10.234 10.234 0 010 11.771'  stroke-linecap='square' stroke-width='1' stroke='hsla(339.6,82.2%,51.6%,1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
    background: #171616 url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='69.282' height='40' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M34.641-20v80m34.64-40L0-20m69.282 80L0 20m69.282 0L0 60m69.282-80L0 20m69.282-40v80M0-20v80M34.64 40l11.547-20m11.547 20l11.547 20M34.641 40h23.094m11.547-20L57.735 40M46.188 20L34.641 40l11.547 20h23.094L80.83 40 69.282 20H46.188zM34.641 40l11.547-20m11.547 20l11.547 20M34.641 40h23.094m11.547-20L57.735 40M46.188 20L34.641 40l11.547 20h23.094L80.83 40 69.282 20H46.188zM34.641 0l11.547-20M57.735 0l11.547 20M34.642 0h23.093m11.547-20L57.735 0M46.188-20L34.641 0l11.547 20h23.094L80.83 0 69.282-20H46.188zM34.641 40L23.094 20M11.547 40L0 60m34.64-20H11.548M0 20l11.547 20m11.547-20l11.547 20-11.547 20H0l-11.547-20L0 20h23.094zM34.641 0L23.094-20M11.547 0L0 20M34.64 0H11.548M0-20L11.547 0m11.547-20L34.641 0 23.094 20H0L-11.547 0 0-20h23.094z'  stroke-width='1' stroke='hsla(0, 0%, 0%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
    transition:all .6s cubic-bezier(0.645, 0.045, 0.355, 1);
    display:flex;
    justify-content:center;
    align-items:center;
    pointer-events:none;

    &.left{
      clip-path: polygon(50% 0%, 0% 0%, 0% 100%, 50% 100%);
    }

    &.right{
      clip-path: polygon(100% 0%, 50% 0%, 50% 100%, 100% 100%);
    }
  }
  &.open {
    .triangle{
      &.left{
        clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)
      }
      &.right{
        clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
      }
    }
  }
  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -4vw;
    margin-left: -4vw;
    width: 8vw;
    height: 8vw;
    border-radius: 50%;
    animation: rotate 1s linear infinite;
    z-index: 2;
    &::before {
      content: "";
      box-sizing: border-box;
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 5px solid #fff;
      animation: prixClipFix 2s linear infinite ;
    }
    &.open {
      display: none;
    }
  }

  @keyframes rotate {
    100%   {transform: rotate(360deg)}
  }

  @keyframes prixClipFix {
    0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
    25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
    50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
    75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
    100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
  }
}
</style>
