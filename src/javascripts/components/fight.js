import util from '../helpers/util';

const domBuilder = () => {
  let domString = '<h3>Fight</h3>';
  domString += '<button>RUN</button>';
  domString += '<button>Fight</button>';
  util.printToDom('fight', domString);
};


export default { domBuilder };
