import { combineReducers } from 'redux';
import Weather from './reducer_weather';
const rootReducer = combineReducers({
	weathers: Weather
})




export default rootReducer;