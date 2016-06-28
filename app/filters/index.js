import DataSvc from './DataSvc';

export default (ngModule) => {
  "use strict";
  
  DataSvc(ngModule);
  console.debug('Services connected!')
}