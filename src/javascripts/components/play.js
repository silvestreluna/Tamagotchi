import util from '../helpers/util';

const domBuilder = () => {
  let domString = '<h3>Play</h3>';
  domString += '<button>Super Fun</button>';
  domString += '<button>Just Fun</button>';
  util.printToDom('play', domString);
};


export default { domBuilder };
