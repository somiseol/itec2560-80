import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// define reactive data to store and export
export const useBMIStore = defineStore('bmi-store', () => {
   const height = ref(0)
   const weight = ref(0)

const usersBmi = computed(() => {
    return weight.value / (height.value * height.value)
})

   // pass to rest of program
   return {
      height,
      weight,
      usersBmi
   }
})