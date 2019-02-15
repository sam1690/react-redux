import user from './user';
import {combineReducers} from 'redux';
import userclicked from './userclicked';

const allReducers = combineReducers({User:user,Userclick:userclicked})

export default allReducers;