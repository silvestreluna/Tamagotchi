import util from '../helpers/util';

let full = 100;

const FoodSum = (e) => {
  const currentId = e.target.id;
  const add = 10;
  const totalGood = full + add;
  if (currentId === 'goodFood') {
    if (totalGood >= 100) {
      full = 100;
    } else if (totalGood < 100) {
      full = totalGood;
    }
  } else if (currentId === 'badFood') {
    const badFood = 3;
    const totalBad = full - badFood;
    if (totalBad <= 0) {
      full = 0;
    } else if (totalBad >= 0) {
      full = totalBad;
    }
  }
  let domString = `<label id="eatLabel" for="scoresEat">${full}</label> <br>`;
  domString += `<progress id="scoresEat" max="100" value="${full}"></progress>`;
  util.printToDom('eatProgress', domString);
};

const addEvent = () => {
  const goodFoodEvent = document.getElementById('goodFood');
  const badFoodEvent = document.getElementById('badFood');
  goodFoodEvent.addEventListener('click', FoodSum);
  badFoodEvent.addEventListener('click', FoodSum);
};

const domBuilder = () => {
  let domString = '<div id="eatDiv">';
  domString += '<h3>Eat</h3>';
  domString += '<div id="eatProgress">';
  domString += '<label id="eatLabel" for="scoresEat">100</label> <br>';
  domString += '<progress id="scoresEat" max="100" value="100"></progress>';
  domString += '</div>';
  domString += '<button id="goodFood" class="scoreButtons">Healthy Food</button>';
  domString += '<button id="badFood" class="scoreButtons">Unhealthy food</button>';
  domString += '</div>';
  util.printToDom('eat', domString);
  addEvent();
};


export default { domBuilder };
