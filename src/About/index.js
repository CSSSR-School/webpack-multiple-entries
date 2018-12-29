import React from "react";
import ReactDOM from "react-dom";

import Navigation from '../Navigation/Navigation';

const About = () => (
  <div className='Home'>
    <Navigation route='about' />
    <h1>About Page</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam harum qui, iure et alias id ipsum laborum! Dicta commodi, reiciendis, fugit quasi dolorum molestias cupiditate nostrum repellendus at a velit!</p>
  </div>
);

ReactDOM.render(<About />, document.getElementById("app"));
