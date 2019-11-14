import myReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: myReducer
});

export default store;