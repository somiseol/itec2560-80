Build a new Express web application.
The setup will be similar to the Student Feedback application that you built in this week's videos. 

Create a home page with a form, with two inputs, one for height in meters, one for weight in kilograms, and a submit button.
When the user makes a request to the home page, they will see a page like this. You can use your own styles and layout.
Make sure all the input element have a name attribute with an appropriate value. 

Typical heights in meters will be numbers like 1.53 or 1.85; and weight value may have decimal places too,
so ensure your input elements allow the user to enter an appropriate number of decimal places,
for example, by using a step attribute. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number

When the user enters their height and weight, and clicks the Calculate button, the form will create a GET request to the server. 
For example, this might be a request to a route  /calculate

The /calculate route will read the form data, from the query of the request, and do the math to calculate the Body Mass Index. 
Assuming variables called height and weight, BMI is calculated like this:  const bmi = weight / (height * height )
The /calculate route will render a second template with a placeholder for the calculated BMI.  Format  the BMI to two decimal places.
Notice the query parameters in the URL. 

If the data in the form is invalid (e.g. missing data, weight is 0, height is 0, non-numeric data) and the BMI value can't be calculated,
then display an error message.
Create a new template to show the error message. 
Create a layout.hbs file, and a stylesheet, and apply the same styles to all pages.  Use your own colors and styles. 
Comment your code!