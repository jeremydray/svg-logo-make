const inquirer = require('inquirer')
const { Triangle, Square, Circle } = require('./lib/shapes')
const fs = require('fs')

const questions =
    [
        {
            type: 'input',
            message: 'What is the name you would like to display (limit 3 characters)?',
            name: 'textName',
            validate: input => input.length > 3 ? 'Needs to be 3 characters max' : true
        },
        {
            type: 'input',
            message: 'What color would you like the text?',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'What shape would you like to use?',
            choices: ['Circle', 'Triangle', 'Square'],
            name: 'shapeName',
        },
        {
            type: 'input',
            message: 'What color would you like the shape?',
            name: 'shapeColor',
        },
    ]

function init() {
    inquirer
        .prompt(questions)
        .then(inputs => {
            console.log(inputs)

            const selectedShape = inputs.shapeName;

            const shapeObj = {
                Circle: Circle,
                Triangle: Triangle,
                Square: Square,
            }

            console.log(shapeObj[selectedShape])

            const shapeRender = JSON.stringify(new shapeObj[selectedShape](inputs.textName.toUpperCase(), inputs.textColor, inputs.shapeColor).render());

            fs.writeFile('./output/logo.svg', JSON.parse(shapeRender), (error) =>
                error ? console.error(error) : console.log('Success!'))


            // Previous code; was repetitive, so the more consolidated version was used

            // if (selectedShape === 'Square') {
            //     const square1 = JSON.stringify(new Square(selectedText.toUpperCase(), selectedTextColor, selectedShapeColor).render());
            //     fs.writeFile('./examples/logo.svg', JSON.parse(square1), (error) =>
            //         error ? console.error(error) : console.log('Success!'))
            // } else if (selectedShape === 'Triangle') {
            //     const triangle1 = JSON.stringify(new Triangle(selectedText.toUpperCase(), selectedTextColor, selectedShapeColor).render());
            //     fs.writeFile('./examples/logo.svg', JSON.parse(triangle1), (error) =>
            //         error ? console.error(error) : console.log('Success!'))
            // } else {
            //     const circle1 = JSON.stringify(new Circle(selectedText.toUpperCase(), selectedTextColor, selectedShapeColor).render());
            //     fs.writeFile('./examples/logo.svg', JSON.parse(circle1), (error) =>
            //         error ? console.error(error) : console.log('Success!'))

        })
}

init()