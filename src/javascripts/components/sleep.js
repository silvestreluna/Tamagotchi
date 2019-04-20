import util from '../helpers/util';

const domBuilder = () => {
  let domString = '<h3>Sleep</h3>';
  domString += '<button>Healthy Food</button>';
  domString += '<button>Unhealthy food</button>';
  util.printToDom('sleep', domString);
};


export default { domBuilder };
