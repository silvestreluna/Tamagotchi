import util from '../helpers/util';

let strength = 100;

const addPoints = (e) => {
  const currentId = e.target.id;
  const runScore = 1;
  const fightScore = 10;
  if (currentId === 'runBtn') {
    const runTotal = strength + runScore;
    if (runTotal >= 100) {
      strength = 100;
    } else {
      strength = runTotal;
    }
  } else if (currentId === 'fightBtn') {
    const fightTotal = strength - fightScore;
    if (fightTotal >= 100) {
      strength = 100;
    } else if (fightTotal <= 100) {
      strength = fightTotal;
    }
  }
  let domString = `<label id="fightLabel" for="fightProgress">${strength}</label> <br>`;
  domString += `<progress id="fightProgress" max="100" value="${strength}"></progress>`;
  util.printToDom('fightProgress', domString);
};

const addEvent = () => {
  const run = document.getElementById('runBtn');
  const fight = document.getElementById('fightBtn');
  run.addEventListener('click', addPoints);
  fight.addEventListener('click', addPoints);
};


const domBuilder = () => {
  let domString = '<h3>Fight</h3>';
  domString += '<div id="fightProgress">';
  domString += '<label id="fightLabel" for="scoresPlay">100</label> <br>';
  domString += '<progress id="scoresPlay" max="100" value="100"></progress>';
  domString += '</div>';
  domString += '<button id="runBtn" class="scoreButtons">Run</button>';
  domString += '<button id="fightBtn" class="scoreButtons">Fight</button>';
  util.printToDom('fight', domString);
  addEvent();
};

export default { domBuilder };
