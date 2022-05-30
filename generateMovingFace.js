const fs = require('fs');

const randomX = () => Math.random() * 1700;

const randomY = () => Math.random() * 800;

const generateAttribute = (property, value) => property + ':' + value;

const createPositionProperty = () => {
  const top = generateAttribute('top', randomY() + 'px');
  const left = generateAttribute('left', randomX() + 'px');
  const position = generateAttribute('position', 'absolute');
  const width = generateAttribute('width', '120px');
  return [width, top, left, position].join(';');
};

const createFaceStyle = () => {
  return `img{${createPositionProperty()}}`;
}; 

const generateMovingFace = () => {
  fs.writeFileSync('./style.css', createFaceStyle(), 'utf8');
};

const startMoving = () => {
  const intervalId = setInterval(() => generateMovingFace(), 100);
  setTimeout(() => clearInterval(intervalId), 1000);
};

startMoving();

