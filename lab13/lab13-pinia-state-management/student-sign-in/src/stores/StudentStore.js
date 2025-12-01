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
        studentList.value = studentList.value.filter( (student) => {
            return studentToDelete != student
        })
    }

    function arrivedOrLeft(student) {
        const studentToModifyIndex = studentList.value.findIndex(s => s.starID == student.starID)
        if (studentToModifyIndex != -1) {
            mostRecentStudent.value = student
            studentList.value[studentToModifyIndex] = student
        }
    }

    const sortedStudents = computed ( () => {
        return studentList.value.toSorted( (s1, s2) => {
            return s1.name.localeCompare(s2.name)
        })
    })

    const studentCount = computed ( () => {
        return studentList.value.length
    })

    return {
        // reactive data
        studentList,
        mostRecentStudent,
        
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,

        sortedStudents,
        studentCount
    }
    
})