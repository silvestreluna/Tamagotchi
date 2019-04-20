import util from '../helpers/util';

const domBuilder = () => {
  let domString = '<h3>Fight</h3>';
  domString += '<button>Healthy Food</button>';
  domString += '<button>Unhealthy food</button>';
  util.printToDom('fight', domString);
};


export default { domBuilder };
