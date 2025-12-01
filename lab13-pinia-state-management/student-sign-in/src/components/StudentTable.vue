<script setup>
    import { useStudentStore } from '../stores/StudentStore.js'
    import { storeToRefs } from 'pinia'

    const studentStore = useStudentStore()

    const { studentList } = storeToRefs(studentStore)

    const deleteStudent = (student) => {
        studentStore.deleteStudent(student)
    }
</script>


<template>
    <div id="student-list-table" class="card m-2 p-2">
        <h4 class="card-title">Student List</h4>

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
                        <!-- iterate over list and display info for each -->
                    <tr v-for="student in studentList" v-bind:key="student.starID" v-bind:class="{ present: student.present, absent: !student.present }"> 
                        <td>{{ student.name }}</td>
                        <td>{{ student.starID }}</td>
                        <td>
                            <input type="checkbox" v-model="student.present" v-on:change="arrivedOrLeft(student)">
                            <span class="mx-3" v-if="student.present">Present</span>
                            <span class="mx-3" v-else>Absent</span>

                        </td>
                        <td>
                            <button class="btn btn-danger" v-on:click="deleteStudent(student)">
                                <i class="bi bi-trash-fill">
                                    </i>Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

        <div id="welcome-or-goodbye-message" class="m-2">
            <div v-if="mostRecentStudent.name">
                <div v-if="mostRecentStudent.present" class="alert alert-success">
                    Welcome, {{ mostRecentStudent.name }}
                </div>
                <div v-else class="alert alert-info">
                    Goodbye, {{ mostRecentStudent.name }}
                </div>
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

.present {
    color: green;
}

.absent {
    color: red;
    font-weight: bold;
}

</style>
