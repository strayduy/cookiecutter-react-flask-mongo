// React
import React, { Component } from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Style
import './App.scss';

// Components
import ExampleComponent from './components/ExampleComponent';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact
                     path="/"
                     render={props => <ExampleComponent {...props} greeting="Hello there" />} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
