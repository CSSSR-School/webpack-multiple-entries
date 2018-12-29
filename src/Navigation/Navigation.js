import React from "react";

const ROUTES = [
  'home',
  'about',
  'welcome'
];

require('./Navigation.css');

export default class Navigation extends React.PureComponent {
  render() {
    const routes = ROUTES.filter(route => route !== this.props.route);

    return (
      <div className='Navigation'>
        <div className='Navigation__links'>
          {routes.map(route =>
            <a className='Navigation__link' href={`/${route}.html`} key={route}>
              {route}
            </a>)}
        </div>
      </div>
    );
  }
}