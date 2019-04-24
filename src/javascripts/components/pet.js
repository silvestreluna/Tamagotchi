import util from '../helpers/util';

const scores = 100;


const domBuilder = () => {
  if (scores <= 50) {
    const sadString = '<div id="sad"></div>';
    util.printToDom('pet', sadString);
  } else {
    const domString = '<div id="art"></div>';
    util.printToDom('pet', domString);
  }
};

// const MainProgress = () => {
//   const numEat = document.getElementById('eatLabel').textContent;
//   const numPlay = document.getElementById('playNum').textContent;
//   const numFight = document.getElementById('fightLabel').textContent;
//   const numSleep = document.getElementById('sleepLabel').textContent;


//   const toNumEat = parseInt(numEat, 10);
//   const toNumPlay = parseInt(numPlay, 10);
//   const toNumFight = parseInt(numFight, 10);
//   const toNumSleep = parseInt(numSleep, 10);


//   const total = toNumEat + toNumPlay + toNumFight + toNumSleep;
//   console.error(total);
// };


// const getValue = () => {
//   const getButtons = document.getElementsByClassName('scoreButtons');
//   console.error(getButtons);
//   // const addEvents = document.getElementById('goodFood');
//   // const moreButton = document.getElementById('badFood');
//   // addEvents.addEventListener('click', MainProgress);
//   // moreButton.addEventListener('click', MainProgress);
// };

export default { domBuilder };
