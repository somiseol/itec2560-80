<script setup>

// mounted is special funct called when component is first created and added to page
import { ref, onMounted } from 'vue'

import WouldYouRather from './components/WouldYouRather.vue';
import wyrService from './services/wyrService';

// reactive state (internally belongs to component, scoped w/in itself)
const wyrQuestion = ref('')
const wyrAnswer1 = ref('')
const wyrAnswer2 = ref('')
const userSelection = ref('')

onMounted(() => {
  wyrQuestion.getRandomWYR().then( wyrData => { // TODO .getRandomWYR() "not a function" error
    wyrQuestion.value = wyrData.question
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2
  })
})

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

  <h2>{{ userSelection }}</h2>

</template>

<style scoped>

</style>
