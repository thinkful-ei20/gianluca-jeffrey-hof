'use strict';

function hazardWarningCreator (typeOfWarning) {
  let warningCounter = 0;

  return (location) => {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };   
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const oilWarning = hazardWarningCreator('Oil on the Road');
const waterWarning = hazardWarningCreator('Water on the Road');

rocksWarning('Main and 1st');
rocksWarning('Main and 2nd');
rocksWarning('Main and 3rd');

oilWarning('Ave and Blvd');
oilWarning('Circle and Way');

waterWarning('Home and Work');