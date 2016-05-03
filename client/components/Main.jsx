import React from 'react';
import TimeLine from './homeView/Timeline.jsx';
import Chart from './classView/Chart.jsx';
import Info from './classView/Info.jsx';

const Main = ({ isHome, currentCourse, courseChanged }) => {
  let view;
  if (isHome) {
    view = (
      <div className="col-md-9 container">
        I am Home.
        <TimeLine />
      </div>
    );
  } else {
    view = (
      <div className="col-md-9 container">
        I am in Main.
        <Chart />
        <Info currentCourse={ currentCourse } courseChanged={ courseChanged } />
      </div>
    );
  }
  return view;
};

Main.propTypes = {
  isHome: React.PropTypes.bool,
  currentCourse: React.PropTypes.object,
  courseChanged: React.PropTypes.bool,
};

export default Main;
