const { Triangle, Circle, Square } = require('./shapes');

class SVG {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  render() {
    const shapeElement = this.shape;
    return `
     
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
         ${shapeElement.render()}
        <text x="150" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
     
      </svg>
    `;
  }

  saveToFile() {
    const svgString = this.render();
    const fs = require('fs');
    fs.writeFileSync('logo.svg', svgString);
    console.log('Generated logo.svg');
  }
}

module.exports = SVG;
