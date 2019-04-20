import util from '../helpers/util';

let full = 100;


const addHealthyFood = () => {
  full += 10;
};

const addEvent = () => {
  const eventId = document.getElementById('eatButton');
  eventId.addEventListener('click', addHealthyFood);
};

const domBuilder = () => {
  let domString = '<h3>Eat</h3>';
  domString += `<p>${full}</p>`;
  domString += '<button id="eatButton">Healthy Food</button>';
  domString += '<button>Unhealthy food</button>';
  util.printToDom('eat', domString);
  addEvent();
};


export default { domBuilder };
