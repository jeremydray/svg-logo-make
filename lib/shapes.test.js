const { Triangle, Square, Circle } = require('./shapes')

describe('Triangle', () => {
    it('should output a green triangle shape with white WWW text, as an SVG', () => {
        const testTriangle = new Triangle('WWW', 'white', 'green');
        const expectedTriangleHtml = `
            <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,190 150,10 250,190" style="fill:green"/>
            <text x="150" y="165" font-size="50" text-anchor="middle" fill="white">WWW</text></svg>
            `;
        expect(testTriangle.render()).toEqual(expectedTriangleHtml)
    })
})

describe('Square', () => {
    it('should output a red triangle shape with pink YYY text, as an SVG', () => {
        const testSquare = new Square('YYY', 'pink', 'red');
        const expectedSquareHtml = `
            <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="10" width="200" height="200" style="fill:red"/>
            <text x="150" y="130" font-size="60" text-anchor="middle" fill="pink">YYY</text></svg>
            `;
        expect(testSquare.render()).toEqual(expectedSquareHtml)
    })
})

describe('Circle', () => {
    it('should output a yellow circle shape with navy ZZZ text, as an SVG', () => {
        const testCircle = new Circle('ZZZ', 'navy', 'yellow');
        const expectedCircleHtml = `
            <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="90" style="fill:yellow"/>
            <text x="150" y="115" font-size="60" text-anchor="middle" fill="navy">ZZZ</text></svg>
            `;
        expect(testCircle.render()).toEqual(expectedCircleHtml)
    })
})