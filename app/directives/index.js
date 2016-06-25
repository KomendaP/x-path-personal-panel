import home from './home-section';
import about from './about-section';
import project from './project-section';

export default ngModule => {
  home(ngModule);
  about(ngModule);
  project(ngModule);
};