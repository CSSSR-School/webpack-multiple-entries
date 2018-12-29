import React from "react";
import ReactDOM from "react-dom";
import moment from 'moment';

import Navigation from '../Navigation/Navigation';

const currentDate = moment().format('DD.MM.YYYY');

const Welcome = () => (
  <div className='Home'>
    <Navigation route='welcome' />
    <h1>Welcome Page</h1>
    <p>Current date is - {currentDate}</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam harum qui, iure et alias id ipsum laborum! Dicta commodi, reiciendis, fugit quasi dolorum molestias cupiditate nostrum repellendus at a velit!</p>
  </div>
);

ReactDOM.render(<Welcome />, document.getElementById("app"));
