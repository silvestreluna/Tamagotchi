import util from '../helpers/util';

const domBuilder = () => {
  let domString = '<h3>Sleep</h3>';
  domString += '<button>Nap</button>';
  domString += '<button>Deep slumber</button>';
  util.printToDom('sleep', domString);
};


export default { domBuilder };
