import util from '../helpers/util';

let fun = 50;

const addPoints = (e) => {
  const currentId = e.target.id;
  const addExtraFun = 50;
  const lessFun = 2;
  if (currentId === 'extraFun') {
    const extraTotal = fun + addExtraFun;
    if (extraTotal >= 100) {
      fun = 100;
    }
  } else if (currentId === 'lessFun') {
    const lessTotal = fun + lessFun;
    if (lessTotal >= 100) {
      fun = 100;
    } else if (lessFun <= 100) {
      fun = lessTotal;
    }
  }
  // util.printToDom('scores', fun);

  let domString = `<label id="playNum" for="scoresPlay">${fun}</label> <br>`;
  domString += `<progress id="scoresPlay" max="100" value="${fun}"></progress>`;
  util.printToDom('playProgress', domString);
};

const addEvent = () => {
  const lotOfFun = document.getElementById('extraFun');
  const lessFun = document.getElementById('lessFun');
  lotOfFun.addEventListener('click', addPoints);
  lessFun.addEventListener('click', addPoints);
};


const domBuilder = () => {
  let domString = '<h3>Play</h3>';
  domString += '<div id="playProgress">';
  domString += '<label id="playNum" for="scoresFight">50</label> <br>';
  domString += '<progress id="scoresFight" max="100" value="50"></progress>';
  domString += '</div>';
  domString += '<button id="extraFun" class="scoreButtons">Super Fun</button>';
  domString += '<button id="lessFun" class="scoreButtons">Just Fun</button>';
  util.printToDom('play', domString);
  addEvent();
};


export default { domBuilder };
