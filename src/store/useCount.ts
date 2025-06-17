import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCountStore = defineStore('count', () => {
  let count = ref(0)

  // 加法操作
  function countAdd() {
    count.value += 1
  }

  // 减法操作
  function countSub() {
    count.value -= 1
  }

  // 将数据和操作返回
  return {
    count,
    countAdd,
    countSub,
  }
})
