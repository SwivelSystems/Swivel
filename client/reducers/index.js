import { combineReducers } from 'redux';
import courses from './courses.js';
import displayedCourse from './displayedCourse.js';
import displayedStudent from './displayedStudent.js';
import goHome from './goHome.js';
import tabView from './tabView.js';
import displayedAssignment from './displayedAssignment.js';

const rootReducer = combineReducers({
  courses,
  displayedCourse,
  displayedStudent,
  goHome,
  tabView,
  displayedAssignment,
});

export default rootReducer;
