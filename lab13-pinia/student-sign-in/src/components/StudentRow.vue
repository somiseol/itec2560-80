<script setup>

import { ref } from 'vue'

const props = defineProps({
    student: Object
})

const emit = defineEmits([ 'arrived-or-left', 'delete-student'])

// we don't want to modify student prop
const isStudentPresent = ref( props.student.present )

const notifyArrivedOrLeft = () => (
    emit('arrived-or-left', props.student, isStudentPresent.value)
)

const confirmThenDeleteStudent = () => {
    if (confirm(`Delete ${props.student.name}?`)) {
        emit('delete-student', props.student)
    }
}

</script>

<template>
    <tr class="align-middle" v-bind:class="{ present: student.present, absent: !student.present }">
        <td>{{ student.name }}</td>
        <td>{{ student.starID }}</td>
        <td>
            <input type="checkbox" v-model="isStudentPresent" v-on:change="notifyArrivedOrLeft">
            <span class="mx-4" v-if="student.present">Here!</span>
            <span class="mx-4" v-else>Absent</span>
        </td>
        <td>
            <!-- using functions from store export -->
            <button class="btn btn-danger" v-on:click="confirmThenDeleteStudent">
                <i class="bi bi-trash-fill"></i> Delete
            </button>
        </td>
    </tr>
</template>