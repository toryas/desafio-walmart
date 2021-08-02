import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
// import { App } from './app';
import { SearchComponent } from './components/search.component';

ReactDOM.render(
  <React.StrictMode>
    <SearchComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
