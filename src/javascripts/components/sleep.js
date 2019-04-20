import util from '../helpers/util';

const domBuilder = () => {
  let domString = '<div>';
  domString += '<h3>Sleep</h3>';
  domString += '<button>Healthy Food</button>';
  domString += '<button>Unhealthy food</button>';
  domString += '</div>';
  util.printToDom('sleep', domString);
};


export default { domBuilder };
