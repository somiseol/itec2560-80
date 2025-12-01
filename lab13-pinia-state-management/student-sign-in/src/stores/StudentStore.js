import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStudentStore = defineStore('students', () => {
    const studentList = ref([
        { name: "A, Student", starID: "aaa123", present: false },
        { name: "B, Student", starID: "bbb456", present: false }
    ])

    const mostRecentStudent = ref( {} )

    function addNewStudent(student) {
        studentList.value.push(student)
    }

    function deleteStudent(studentToDelete) {
        studentList.value = studentList.value.fileter( (student) => {
            return studentToDelete != student
        })
    }

    return {
        // reactive data
        studentList,
        mostRecentStudent,
        
        addNewStudent,
        deleteStudent
    }
    
})