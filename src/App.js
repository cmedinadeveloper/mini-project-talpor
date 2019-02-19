import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import createStore from './Config/createStore';
import AppNavigation from './Navigation/appNavigation';

const { store, persistor } = createStore();

const AppNav = createReduxContainer(AppNavigation, 'root');
const mapStateToProps = state => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(AppNav);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppWithNavigationState />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
