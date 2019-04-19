import domPrinter from '../helpers/util';


const domBuilder = () => {
  let domString = '<div id="fullPage" class="full">';
  domString += '<h1>Hello Word</h1>';
  domString += '</div>';
  domPrinter.printToDom('app', domString);
};

export default { domBuilder };
