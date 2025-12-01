<script setup>

    import StudentRow from './StudentRow.vue'

    import { computed } from 'vue'

    import { storeToRefs } from 'pinia'

    import { useStudentStore } from '../stores/StudentStore.js'
    
    const studentStore = useStudentStore()

    const { sortedStudents, studentCount } = storeToRefs(studentStore)

    const deleteStudent = (student) => {
        studentStore.deleteStudent(student)
    }

    const arrivedOrLeft = (studentList, isStudentPresent) => {
        student.present = isStudentPresent
        studentStore.arrivedOrLeft(student)
    }

    const pluralStudentMessage = computed (() => {
        if (studentCount.value == 1) {
            return '1 student'
        } else {
            return '${studentCount.value} students'
        }
    })

</script>


<template>
    <div id="student-list-table" class="card m-2 p-2">
        <h4 class="card-title">Student List</h4>
        <h5 class="card-subtitle text-muted">{{ pluralStudentMessage }}</h5>
        <div id="student-table">
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>StarID</th>
                        <th>Present?</th>
                    </tr>
                </thead>

                <tbody>
                    <StudentRow
                        v-for="student in sortedStudents"
                        v-bind:key="student.starID"
                        v-bind:student="student"
                        v-on:delete-student="deleteStudent"
                        v-on:arrived-or-left="arrivedOrLeft">
                    </StudentRow>
                </tbody>
            </table>
        </div>
    </div>
</template>


<style scoped>

#student-table {
    max-height: 500px;
    overflow: scroll;
}

th, td {
    width: 25%;
    text-align: center;
}

</style>
