let { GoogleGenAI } = require('@google/genai')
let departments = require('./departments.json')

let genAI = new GoogleGenAI( {} )

function selectDepartments(message) {
    let departmentString = JSON.stringify(departments)

    let prompt = `Return a lsit of the most likely departments to handle to following feedback message.
    Only include departments that seem to be a good fit for the message.
    If there does not seem to be a good fit, return an empty list.
    message: ${message}
    departments: ${departmentString}`

    return genAI.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            responseMimeType: 'application/json',
            responseJsonSchema: {
                type: Type.ARRAY,
                items: {
                    type: Type.STRING
                }
            }
        }
    }).then( response => {
        console.log(response.text)
        let departmentList = JSON.parse(response.text)
        console.log(departmentList)
        return departmentList
    })
}