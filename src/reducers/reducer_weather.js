const GET_WEATHER = 'get_weather';

export default function(state =  null, payload) {
	if ( GET_WEATHER == payload.type) {
		console.log(payload);
	}

	return state
}