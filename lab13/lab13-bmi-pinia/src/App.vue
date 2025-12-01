<script setup>
import { ref,  computed } from 'vue'
import bmiCalc from './components/bmiCalc.vue'

import { useBMIStore } from './stores/BMIStore'
import { storeToRefs } from 'pinia'
import BmiCalc from './components/bmiCalc.vue'

const BMIStore = useBMIStore()
const { height, weight, usersBmi} = storeToRefs(BMIStore)

</script>

<template>
    <h1>BMI CALCULATOR</h1>

    <bmiCalc/>

    <!-- show if valid inputs-->
    <div v-if="usersBmi">
        <p>BMI: {{ usersBmi.toFixed(1) }}</p>
    </div>

</template>