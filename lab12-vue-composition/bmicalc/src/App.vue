<script setup>
import { ref } from 'vue'
import BmiCalc from './components/bmiCalc.vue'

const bmiAnswer = ref('')

const heightQuestionMetric = ref('height in m ')
const weightQuestionMetric = ref('weight in kg ')

const heightQuestionImperial = ref('height in in ')
const weightQuestionImperial = ref('weight in lb ')

const isImperial = ref(false)

// ???
function updateBmi(bmi) {
    bmiAnswer.value = bmi
}
</script>

<template>
    <h1>BMI CALCULATOR</h1>

    <label for="imperialCheck">imperial</label>
    <input id="imperialCheck" type="checkbox" v-model="isImperial">

    <BmiCalc
        v-bind:heightQ="isImperial ? heightQuestionImperial : heightQuestionMetric"
        v-bind:weightQ="isImperial ? weightQuestionImperial : weightQuestionMetric"

        v-bind:isImperial="isImperial"

        v-on:bmiAnswer="updateBmi"
    /> 

    <div v-if="bmiAnswer">
        <p>BMI: {{ bmiAnswer }}</p>
    </div>

</template>