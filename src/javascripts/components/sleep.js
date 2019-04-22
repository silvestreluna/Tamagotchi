import util from '../helpers/util';

let energy = 50;

const addPoints = (e) => {
  const currentId = e.target.id;
  const numNap = 50;
  const numSlumber = 60;
  if (currentId === 'nap') {
    const napTotal = energy + numNap;
    if (napTotal >= 100) {
      energy = 100;
    }
  } else if (currentId === 'slumber') {
    const slumberTotal = energy + numSlumber;
    if (slumberTotal >= 100) {
      energy = 100;
    } else if (slumberTotal <= 100) {
      energy = slumberTotal;
    }
  }
  util.printToDom('sleepScore', energy);
};

const addEvent = () => {
  const nap = document.getElementById('nap');
  const slumber = document.getElementById('slumber');
  nap.addEventListener('click', addPoints);
  slumber.addEventListener('click', addPoints);
};


const domBuilder = () => {
  let domString = '<h3>Sleep</h3>';
  domString += '<p id="sleepScore">50</p>';
  domString += '<button id="nap">Nap</button>';
  domString += '<button id="slumber">Deep slumber</button>';
  util.printToDom('sleep', domString);
  addEvent();
};


export default { domBuilder };
