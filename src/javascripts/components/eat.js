import util from '../helpers/util';

const domBuilder = () => {
  let domString = '<h3>Eat</h3>';
  domString += '<button>Healthy Food</button>';
  domString += '<button>Unhealthy food</button>';
  util.printToDom('eat', domString);
};


export default { domBuilder };
