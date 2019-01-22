// React
import React, { Component } from 'react';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Style
import './App.scss';

// Components
import ExampleComponent from './components/ExampleComponent';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ExampleComponent greeting="Hello there" />
        </div>
      </Provider>
    );
  }
}

export default App;
