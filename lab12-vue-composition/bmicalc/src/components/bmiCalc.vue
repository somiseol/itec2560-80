<script setup>
import { ref } from 'vue'

const inHeight = ref(0)
const inWeight = ref(0)

// from parent to child
defineProps({
    heightQ: String,
    weightQ: String,

    isImperial:Boolean
})

const emit = defineEmits ( [
    'bmiAnswer'
    ] )

function statsEntered(isImperial) {
    let bmi = 0 // def value
    
    if (inHeight.value > 0 && inWeight.value > 0 && isImperial) { // bmi formula
        bmi = inWeight.value / (inHeight.value * inHeight.value) * 730 // asign val
    }
    else if (inHeight.value > 0 && inWeight.value > 0 && !isImperial)
    {
        bmi = inWeight.value / (inHeight.value * inHeight.value)
    }

    emit('bmiAnswer', bmi.toFixed(2)) // emit(var, val)
}

</script>


<template>
    <div>
        <h2>Enter height and weight:</h2>
     </div>

    <div>
        <label for="inHeight">{{ heightQ }} </label>
        <input id="inHeight" type="number" v-model="inHeight"> <!-- 2-way -->
        <br>
        <label for="inWeight">{{ weightQ }} </label>
        <input id="inWeight" type="number" v-model="inWeight">
    </div>

    <br>
    <button v-on:click="statsEntered(isImperial)">Calculate</button>
</template>