import { ref } from 'vue'

function setHoverAnimation(el) {
  const rect = el.value.getBoundingClientRect()
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
  }
}
export default function mouseMove(e) {
  const el = ref(e.target)

  const parentOffset = setHoverAnimation(el)
  const relX = e.pageX - parentOffset.left
  const relY = e.pageY - parentOffset.top

  el.value.querySelector('span').style.top = `${relY}px`
  el.value.querySelector('span').style.left = `${relX}px`
}
