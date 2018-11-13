import React, { Component } from 'react';
import { render } from 'react-dom';
import Routes from "./routes";
import './index.css';
import * as serviceWorker from './serviceWorker';

class App extends Component {

  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
