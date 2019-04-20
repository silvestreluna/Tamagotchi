import util from '../helpers/util';

const domBuilder = () => {
  let domString = '<div>';
  domString += '<h3>Fight</h3>';
  domString += '<button>Healthy Food</button>';
  domString += '<button>Unhealthy food</button>';
  domString += '</div>';
  util.printToDom('fight', domString);
};


export default { domBuilder };
