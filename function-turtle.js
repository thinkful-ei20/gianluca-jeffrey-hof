'use strict';

const turtleMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

const filteredTurtle = turtleMoves.filter(movement =>
  movement[0] >= 0 && movement[1] >= 0);

const mappedTurtle = filteredTurtle.map(steps =>
  steps[0] + steps[1]);


mappedTurtle.forEach(turtle => {
  console.log(`Number of steps: ${turtle}`);
});