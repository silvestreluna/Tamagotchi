import '../styles/main.scss';
import eat from './components/eat';
import fight from './components/fight';
import play from './components/play';
import sleep from './components/sleep';
import pet from './components/pet';


const init = () => {
  eat.domBuilder();
  fight.domBuilder();
  play.domBuilder();
  sleep.domBuilder();
  // pet.getValue();
  pet.domBuilder();
};

init();
