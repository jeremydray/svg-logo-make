const fs = require('fs')



class Shape {
    constructor(intials, ititialsColor, shapeColor) {
        this.intials = intials;
        this.ititialsColor = ititialsColor;
        this.shapeColor = shapeColor
    }
}


class Triangle extends Shape {
    constructor(intials, ititialsColor, shapeColor) {
        super(intials, ititialsColor, shapeColor);
    }
    render() {
        return `<svg version="1.1"
        width="300" height="200" 
        xmlns="http://www.w3.org/2000/svg">

        <polygon points="20,200 120,10 220,220" style="fill:${this.shapeColor}"/>
    
        <text x="115" y="165" font-size="50" text-anchor="middle" fill="${this.ititialsColor}">${this.intials}</text></svg>
        `
    }
}

class Square extends Shape {
    constructor(intials, ititialsColor, shapeColor) {
        super(intials, ititialsColor, shapeColor);
    }
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <rect x="10" y="10" width="200" height="200" style="fill:${this.shapeColor}"/>
    
        <text x="110" y="130" font-size="60" text-anchor="middle" fill="${this.ititialsColor}">${this.intials}</text></svg>
        `
    }
}

class Circle extends Shape {
    constructor(intials, ititialsColor, shapeColor) {
        super(intials, ititialsColor, shapeColor);
    }
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <circle cx="110" cy="110" r="90" style="fill:${this.shapeColor}"/>
    
        <text x="110" y="130" font-size="60" text-anchor="middle" fill="${this.ititialsColor}">${this.intials}</text></svg>
        `
    }
}

module.exports = { Triangle, Square, Circle }


