import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import Auth from './AuthReducer/AuthReducer';
import AppNavigation from '../Navigation/appNavigation';

const navReducer = createNavigationReducer(AppNavigation);

const appReducer = combineReducers({
  Auth,
  nav: navReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
