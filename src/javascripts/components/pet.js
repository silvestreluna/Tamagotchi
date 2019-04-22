import util from '../helpers/util';

const scores = 49;

const domBuilder = () => {
  if (scores <= 50) {
    const sadString = '<div id="sad"></div>';
    util.printToDom('pet', sadString);
  } else {
    let domString = '<h3 id"test">Pet</h3>';
    domString += '<div id="art"></div>';
    util.printToDom('pet', domString);
  }
};

export default { domBuilder };
