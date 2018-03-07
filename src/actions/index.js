import axios from 'axios';

export const GET_WEATHER = 'get_weather';
const WEATHER_API = '8ffa32e8fde0194fa77a68dded81e683';
const URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API}`;



export function searchWeather(city) {

	const request = axios.get(`${URL}&q=${city},us`);
	return {
		type: GET_WEATHER,
		payload: request
	}
}

