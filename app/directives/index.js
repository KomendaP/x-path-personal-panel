import mainMenu from './home/mainMenu/mainMenu';
import counterDecorator from './DECORATORS/counter';
import counter from './home/counter/appCounter';
import card from './about/card/appCard';

export default (ngModule) => {
  "use strict";
  
  mainMenu(ngModule);
  counter(ngModule);
  card(ngModule);

  counterDecorator(ngModule);
  console.debug('Directives connected!');
}