


let { GoogleGenAI, Type } = require('@google/genai')

let genAI = new GoogleGenAI( {} )

let userInput = 'I have eggs, broccoli, leftover chicken'

let prompt = `Suggest one recipe that uses those ingredients.
Ingredients: ${userInput}`

genAI.models.generateContent( {
    model: 'gemini-2.5-flash',
    contents: 'prompt',
    config: {
        systemInstruction: `You are a recipe suggestion bot`,
        responseMimeType: 'application/json',
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                recipeName: {
                    type: Type.STRING
                },
                description: {
                    type: Type.STRING
                },
                ingredients: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.STRING
                    }
                },
                instructions: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.STRING
                    }
                }
            }
        }
    }
} ).then( resp => {
    let recipe = JSON.parse(resp.text)
    console.log(recipe)
    console.log(recipe.recipeName)
})