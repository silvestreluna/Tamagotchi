
const printToDom = (divId, itemToPrint) => {
  const contentDiv = document.getElementById(divId);
  contentDiv.innerHTML = itemToPrint;
};


export default { printToDom };
