import { ref, watchEffect, onBeforeUnmount } from 'vue'

export default function useTitle(title) {
  const prevTitle = ref(document.title)
  const stop = watchEffect(() => {
    document.title = title
  })
  onBeforeUnmount(() => {
    document.title = prevTitle.value
    stop()
  })
}
