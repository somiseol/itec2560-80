<script setup>

import { ref } from 'vue'

import BmiCalc from './components/bmiCalc.vue'

const heightAnswer = ref(0.0)
const weightAnswer = ref(0.0)

const bmiAnswer = ref('')

function getBmiMetric(height, weight) {
    return weight / ( height * height )
}

</script>


<template>
    <h1>BMI CALCULATOR</h1>

    <BmiCalc>

    </BmiCalc>

</template>


<style scoped>

</style>
