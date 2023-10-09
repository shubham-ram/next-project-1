import { combineReducers, createStore } from 'redux';
import toDoReducer from './reducer/todoReducer';
import counterReducer from './reducer/counterReducer';

const allReducer = combineReducers({todo:toDoReducer, counter:counterReducer})

const store  = createStore(allReducer)

export default store