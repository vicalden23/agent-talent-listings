import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Listings from './containers/Listings';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Listings} />
        </Switch>
      </div>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
