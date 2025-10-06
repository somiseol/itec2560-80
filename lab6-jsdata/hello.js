console.log('hello world')


// name
let name = 'somi' // "let" is block-scoped
let todayTemp = 71

console.log(name)
console.log(todayTemp)


function gpavalidation(gpa) {
    return (gpa >= 0 && gpa <= 4)
}
//console.log(gpavalidation(2)) // true


function addressmaker(city, state) {
    //
    state = state.toUpperCase()
    return `${arguments[0]}, ${state}` // arguments[] is built-in
}
//console.log(addressmaker('Minneapolis', 'mn'))


// type coercion
function coerceexample(){
    let num5 = 5 // int
    let str5 = '5' //str

    // coerced
    let doubleeq = (num5 == str5)
    let notdoubleeq = (num5 != str5)

    // eval type
    let tripleeq = (num5 === str5)
    let nottripleeq = (num5 !== str5)

    return [doubleeq, tripleeq, notdoubleeq, nottripleeq] // true, false, false, true
}


// loops
for (let i = 0; i < 10; i++) { // decl;condition;incr
    console.log(i)
}

let ii = 3
while (ii < 10) {
    ii++
    console.log(ii)
}

// funct loop
let arr1 = ['a', 'b', 'c', 'd']
arr1.forEach(function(char, index){
    console.log(index + char)
})