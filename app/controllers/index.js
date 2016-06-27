import MainCtrl from './MainCtrl';
import HomeCtrl from './HomeCtrl';

export default (ngModule) => {
  "use strict";
  
  MainCtrl(ngModule);
  HomeCtrl(ngModule);
}