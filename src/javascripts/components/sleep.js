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
  let domString = `<label id="sleepLabel"  for="scoresSleep">${energy}</label> <br>`;
  domString += `<progress id="scoresSleep" max="100" value="${energy}"></progress>`;
  util.printToDom('sleepProgress', domString);
};

const addEvent = () => {
  const nap = document.getElementById('nap');
  const slumber = document.getElementById('slumber');
  nap.addEventListener('click', addPoints);
  slumber.addEventListener('click', addPoints);
};


const domBuilder = () => {
  let domString = '<div id="sleepDiv">';
  domString += '<h3>Sleep</h3>';
  domString += '<div id="sleepProgress">';
  domString += '<label id="sleepLabel" for="scoresSleep">50</label> <br>';
  domString += '<progress id="scoresSleep" max="100" value="50"></progress>';
  domString += '</div>';
  domString += '<button id="nap" class="scoreButtons">Nap</button>';
  domString += '<button id="slumber" class="scoreButtons">Deep slumber</button>';
  domString += '</div>';
  util.printToDom('sleep', domString);
  addEvent();
};


export default { domBuilder };
