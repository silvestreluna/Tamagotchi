import util from '../helpers/util';

const mainProgressMath = () => {
  const numEat = document.getElementById('eatLabel').textContent;
  const numPlay = document.getElementById('playNum').textContent;
  const numFight = document.getElementById('fightLabel').textContent;
  const numSleep = document.getElementById('sleepLabel').textContent;

  const toNumEat = parseInt(numEat, 10);
  const toNumPlay = parseInt(numPlay, 10);
  const toNumFight = parseInt(numFight, 10);
  const toNumSleep = parseInt(numSleep, 10);


  const total = toNumEat + toNumPlay + toNumFight + toNumSleep;
  const AvTotal = total / 4;
  return AvTotal.toFixed();
};

const buildProgressBar = () => {
  let domString = '<div>';
  domString += '<div id="petProgress">';
  domString += `<label id="petNum" for="scoresFight">${mainProgressMath()}%: </label>`;
  domString += `<progress id="scorePet" max="100" value=${mainProgressMath()}></progress>`;
  domString += '</div>';
  util.printToDom('mainPrg', domString);
};
let scores = 0;

const domBuilder = () => {
  scores = mainProgressMath();
  if (scores <= 50) {
    let sadString = '<div id="sad"></div>';
    sadString += '<div id="mainPrg"></div>';

    util.printToDom('pet', sadString);
  } else {
    let domString = '<div id="art"></div>';
    domString += '<div id="mainPrg"></div>';

    util.printToDom('pet', domString);
  }

  let pagePrg = '<label id="petNum" for="scoresFight">75%: </label>';
  pagePrg += '<progress id="scorePet" max="100" value="75" ></progress>';
  util.printToDom('mainPrg', pagePrg);
};

const getValue = () => {
  document.getElementById('goodFood').addEventListener('click', buildProgressBar);
  document.getElementById('badFood').addEventListener('click', buildProgressBar);

  document.getElementById('extraFun').addEventListener('click', buildProgressBar);
  document.getElementById('lessFun').addEventListener('click', buildProgressBar);

  document.getElementById('runBtn').addEventListener('click', buildProgressBar);
  document.getElementById('fightBtn').addEventListener('click', buildProgressBar);

  document.getElementById('nap').addEventListener('click', buildProgressBar);
  document.getElementById('slumber').addEventListener('click', buildProgressBar);
};

export default { domBuilder, getValue };
