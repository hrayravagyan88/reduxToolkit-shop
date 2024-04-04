import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import cardSlice from './cardSlice';
import productSlice from './productSlice';

const reducer = combineReducers({
    card:cardSlice,
    products:productSlice
  })
  

const store = configureStore({
    reducer
})
export default store;