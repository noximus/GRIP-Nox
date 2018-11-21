import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';


render(<App />, document.getElementById('root'));
serviceWorker.unregister();
