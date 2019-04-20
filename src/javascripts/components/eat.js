import util from '../helpers/util';

let full = 100;

const addHealthyFood = () => {
  const add = 10;

  if (full >= 100) {
    full = 100;
    document.getElementById('eatButton').disabled = true;
  } else if (full < 100) {
    document.getElementById('eatButton').disabled = false;
    const total = full + add;
    console.error(total);
    full = total;
  }
  util.printToDom('score', `<p>${full}</p>`);
};

const unhealthyFood = () => {
  document.getElementById('eatButton').disabled = false;
  const badFood = 3;
  const total = full - badFood;
  if (total <= 100) {
    full = total;
  } else if (total >= 100) {
    full = 100;
  }
  util.printToDom('score', `<p>${full}</p>`);
};


const addEvent = () => {
  const goodFood = document.getElementById('eatButton');
  const badFood = document.getElementById('badFood');
  goodFood.addEventListener('click', addHealthyFood);
  badFood.addEventListener('click', unhealthyFood);
};

const domBuilder = () => {
  let domString = '<div>';
  domString += '<h3>Eat</h3>';
  domString += '<div id="score">100</div>';
  domString += '<button id="eatButton">Healthy Food</button>';
  domString += '<button id="badFood">Unhealthy food</button>';
  domString += '</div>';
  util.printToDom('eat', domString);
  addEvent();
};


export default { domBuilder };
