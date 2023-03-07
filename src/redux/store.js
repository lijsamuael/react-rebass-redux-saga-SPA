import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './reducers/employeeReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
  composeWithDevTools
});


export default store;
