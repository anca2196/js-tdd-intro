const assert = require('assert');
const Rectangle = require('../Rectangle');

const rectangle_1 = new Rectangle(5, 5);
const rectangle_2 = new Rectangle(5, 15);
const rectangle_3 = new Rectangle(10, 15);
const rectangle_4 = new Rectangle(4, 5);

describe('Rectangle', () => {

    // isSquare: verify that it returns true on instance created with two sides of the same length; one to verify that it returns false if it does not
    it('is a square', () =>{
        assert.strictEqual( rectangle_1.isSquare(), true);
        assert.strictEqual( rectangle_2.isSquare(), false);
    });

    // getArea: check that it returns the area of the rectangle (ex: 91 for a 13 by 7 rectangle).
    it('calculates the area', () => {
        assert.strictEqual( rectangle_3.getArea(), 150);
    });

    // getPerimeter(): check that it returns the area of the rectangle (ex: 40 for a 13 by 7 rectangle).
    it('calculates the perimeter', () => {
        assert.strictEqual( rectangle_4.getPerimeter(), 18);
    });

})

