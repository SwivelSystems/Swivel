import React from 'react';
import Nav from './Nav.jsx';
import Main from './Main.jsx';
import Landing from './Landing.jsx';

const App = (props) => (
  <div>
    <Nav />
    { true ? <Main /> : <Landing /> }
  </div>
);

export default App;
