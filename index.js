const inquirer = require('inquirer')
const { Triangle, Square, Circle } = require('./lib/shapes')
const fs = require('fs')

const questions =
    [
        {
            type: 'input',
            message: 'What is the name you would like to display (limit 3 characters)?',
            name: 'textName',
            validate: function (input) {
                if (input.length > 3) {
                    return 'Needs to be 3 characters max'
                }
                return true;
            }
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

            const selectedText = inputs.textName;
            const selectedTextColor = inputs.textColor;
            const selectedShape = inputs.shapeName;
            const selectedShapeColor = inputs.shapeColor;

            console.log(selectedShape)

            if (selectedShape === 'Square') {

                const square1 = JSON.stringify(new Square(selectedText.toUpperCase(), selectedTextColor, selectedShapeColor).render());

                fs.writeFile('./examples/logo.svg', JSON.parse(square1), (error) =>
                    error ? console.error(error) : console.log('Success!'))

            } else if (selectedShape === 'Triangle') {

                const triangle1 = JSON.stringify(new Triangle(selectedText.toUpperCase(), selectedTextColor, selectedShapeColor).render());

                fs.writeFile('./examples/logo.svg', JSON.parse(triangle1), (error) =>
                    error ? console.error(error) : console.log('Success!'))

            } else {

                const circle1 = JSON.stringify(new Circle(selectedText.toUpperCase(), selectedTextColor, selectedShapeColor).render());

                fs.writeFile('./examples/logo.svg', JSON.parse(circle1), (error) =>
                    error ? console.error(error) : console.log('Success!'))
            }
        })
}

init()