<script setup>
  import { ref } from 'vue'

  // props: values from parent to child
  defineProps({
    question: String,
    answer1: String,
    answer2: String
  })

  // prevent both radio buttons being selected
  const choice = ref(null)

  // emits: values from child to parent
  const emit = defineEmits( [
    'answer-selected' // name of event
  ])

  function choiceMade() {
    emit('answer-selected', choice.value)
  }

</script>

<template>

  <h2>make a choice</h2>

  {{ question }}

  <div>
    <!-- radio to one var -->
    <input type="radio" id="answer-1" v-model="choice" v-bind:value="answer1" v-on:change="choiceMade">
    <label for="answer-1">{{ answer1 }}</label>

    <input type="radio" id="answer-2" v-model="choice" v-bind:value="answer2" v-on:change="choiceMade">
    <label for="answer-2">{{ answer2 }}</label>
  </div>

</template>

<style scoped>

</style>
