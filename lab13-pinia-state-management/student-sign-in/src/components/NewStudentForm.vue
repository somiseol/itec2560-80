<script setup>
	import { ref } from 'vue'

	import { useStudentStore } from '../stores/StudentStore'
	const studentStore = useStudentStore()

	const newStudentName = ref('')
	const newStarID = ref('')

	const formErrors = ref([])

	const addStudent = () => {
		formErrors.value = [] // clear errors array

		if (!newStudentName.value) {
			formErrors.value.push("no student name entered")
		}
		if (!newStarID.value) {
			formErrors.value.push("no id entered")
		}

		if (formErrors.value.length == 0) {
			let student = { 
				name: newStudentName.value,
				starID: newStarID.value,
				present: false
			}

			// TODO add new student

			newStudentName.value = '' // clear form
			newStarID.value = '' // clear form
		}
	}

</script>


<template>
	<div id="new-student-form-errors" class="m-2">
            <!-- display boostrap error msg if list of errors is more than 0 -->
            <div class="alert alert-danger" v-if="formErrors.length > 0">
                <li v-for="error in formErrors" v-bind:key="error">
                    {{ error }}
                </li>
            </div>
        </div>


        <div id="new-student-form" class="card add-student m-2 p-2">
            <h4 class="card-title">Add new student</h4>

            <div class="form-group mb-3">
                <label for="name">Name</label>
                <!-- v-model creates two-way data binding; automatically syncs input element's value w data property, &v/v -->
                <!-- trim for whitespace -->
                <input id="name" class="form-control" v-model.trim="newStudentName">
            </div>

            <div class="form-group mb-3">
                <label for="starID">Star ID</label>
                <input id="starID" class="form-control" v-model.trim="newStarID">
            </div>

            <!-- vue event handler -->
            <button class="btn btn-primary" v-on:click="addStudent">Add</button>
        </div>

</template>


<style scoped>
	/* css */
</style>
