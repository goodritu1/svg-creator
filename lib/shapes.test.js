const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  it('renders a triangle with a given color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Circle', () => {
  it('renders a circle with a given color', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="50" fill="red" />');
  });
});

describe('Square', () => {
  it('renders a square with a given color', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="green" />');
  });
});
