<script setup>
import { useBMIStore } from '../stores/BMIStore'
import { storeToRefs } from 'pinia'

const BMIStore = useBMIStore()
const { height, weight } = storeToRefs(BMIStore)

</script>

<template>
    <div>
        <h2>Enter height and weight:</h2>
     </div>

    <div>
        <label for="height">height in m </label>
        <input id="height" type="number" v-model="height"> <!-- 2-way -->
        <br>
        <label for="weight">weight in kg </label>
        <input id="weight" type="number" v-model="weight">
    </div>
    <br>
</template>