<script setup>

// mounted is special funct called when component is first created and added to page
import { ref, onMounted } from 'vue'

import WouldYouRather from './components/WouldYouRather.vue';
import wyrService from './services/wyrService';

// reactive state (internally belongs to component, scoped w/in itself)
const wyrQuestion = ref('eat an apple or eat a worm')
const wyrAnswer1 = ref('apple')
const wyrAnswer2 = ref('worm')
const userSelection = ref('')

function updateUserSelection(userChoice) {
  userSelection.value = `you chose: ${userChoice}`
}

</script>

<template>
  <h1>would you rather:</h1>

  <WouldYouRather
    v-bind:question="wyrQuestion" 
    v-bind:answer1="wyrAnswer1" 
    v-bind:answer2="wyrAnswer2"
    v-on:answer-selected="updateUserSelection">
  </WouldYouRather>

  <h2>{{ userSelection}}</h2>

</template>

<style scoped>

</style>
