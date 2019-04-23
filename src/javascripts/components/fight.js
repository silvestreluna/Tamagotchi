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
  util.printToDom('fightScore', strength);
};

const addEvent = () => {
  const run = document.getElementById('runBtn');
  const fight = document.getElementById('fightBtn');
  run.addEventListener('click', addPoints);
  fight.addEventListener('click', addPoints);
};


const domBuilder = () => {
  let domString = '<h3>Fight</h3>';
  domString += '<p id="fightScore">100</p>';
  domString += '<button id="runBtn">Run</button>';
  domString += '<button id="fightBtn">Fight</button>';
  util.printToDom('fight', domString);
  addEvent();
};

export default { domBuilder };
