import util from '../helpers/util';

let full = 100;

const addHealthyFood = () => {
  document.getElementById('badFood').disabled = false;
  const add = 10;
  const total = full + add;
  if (total >= 100) {
    full = 100;
    document.getElementById('goodFood').disabled = true;
  } else if (total < 100) {
    document.getElementById('goodFood').disabled = false;
    full = total;
  }
  util.printToDom('score', `<p>${full}</p>`);
};

const unhealthyFood = () => {
  document.getElementById('goodFood').disabled = false;
  const badFood = 3;
  const total = full - badFood;
  if (total <= 0) {
    full = 0;
    document.getElementById('badFood').disabled = true;
  } else if (total >= 0) {
    full = total;
  }
  util.printToDom('score', `<p>${full}</p>`);
};


const addEvent = () => {
  const goodFoodEvent = document.getElementById('goodFood');
  const badFoodEvent = document.getElementById('badFood');
  goodFoodEvent.addEventListener('click', addHealthyFood);
  badFoodEvent.addEventListener('click', unhealthyFood);
};

const domBuilder = () => {
  let domString = '<div>';
  domString += '<h3>Eat</h3>';
  domString += '<p id="score">100</p>';
  domString += '<button id="goodFood">Healthy Food</button>';
  domString += '<button id="badFood">Unhealthy food</button>';
  domString += '</div>';
  util.printToDom('eat', domString);
  addEvent();
};


export default { domBuilder };
