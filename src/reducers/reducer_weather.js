import { GET_WEATHER } from '../actions/index';

export default function(state =  null, action) {
	if ( GET_WEATHER == action.type) {
		return [action.payload.data, ...state]
	}

	return state
}