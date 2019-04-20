import util from '../helpers/util';

const domBuilder = () => {
  let domString = '<div>';
  domString += '<h3>Play</h3>';
  domString += '<button>Healthy Food</button>';
  domString += '<button>Unhealthy food</button>';
  domString += '</div>';
  util.printToDom('play', domString);
};


export default { domBuilder };
