'use strict';

class Polygon {
    constructor(width, height) {
        this.name = 'Polygon';
        this.width = width;
        this.height = height;
    }

    sayName() {
        console.log('Hi, my name is ' + this.name);
    }

    get area() {
        return this.height * this.width;
    }
}

module.exports = Polygon;