import { ref, watchEffect } from 'vue'

export default function useRequest(requestFn, requestParams) {
  const loading = ref(false)
  const data = ref(null)
  const error = ref(null)

  async function request(params) {
    loading.value = true
    try {
      const response = await requestFn(params)
      if (response.code) {
        error.value = response.message
      } else {
        data.value = response
      }
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  watchEffect(() => {
    request(requestParams || {})
  })

  return {
    loading: loading.value,
    data: data.value,
    error: error.value
  }
}
