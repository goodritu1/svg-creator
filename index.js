const getUserInput = require('./lib/user-input');
const { Triangle, Circle, Square } = require('./lib/shapes');
const SVG = require('./lib/svg');

async function main() {
  const userInput = await getUserInput();
  let shape 
  switch (userInput.shape) {
    case 'circle':
      shape = new Circle();
      break;
      case 'square':
        shape = new Square();
        break;
        case 'triangle':
          shape = new Triangle();
          break;
          default:
            console.log('Invalid shape');
            return;
            }
            shape.setColor(userInput.shapeColor)
  const svg = new SVG(userInput.text, userInput.textColor, shape);
  svg.saveToFile();
}


main();
  